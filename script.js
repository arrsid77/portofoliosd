// ============================================================
// script.js — Sid Portfolio
// All interactions, animations, and effects
// ============================================================

// ── Loader ───────────────────────────────────────────────────
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        // Trigger initial reveal animations after loader
        document.body.style.overflow = 'auto';
        initRevealAnimations();
    }, 1800);
    document.body.style.overflow = 'hidden';
});

// ── Custom Cursor ─────────────────────────────────────────────
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left  = mouseX + 'px';
    cursorDot.style.top   = mouseY + 'px';
});

// Smooth ring follow
function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

// Ring hover effect
document.querySelectorAll('a, button, .skill-card, .project-card, .about-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
});

// ── Navbar ────────────────────────────────────────────────────
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
const navLinks  = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNav();
    handleBackToTop();
});

// Mobile toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'auto';
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Active nav link on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        const link   = document.querySelector(`.nav-link[href="#${id}"]`);

        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ── Typing Effect ─────────────────────────────────────────────
const typingEl    = document.getElementById('typingText');
const typingWords = [
    'Junior Web Developer',
    'UI/UX Enthusiast',
    'Fresh Graduate',
    'Problem Solver',
    'Creative Coder'
];

let wordIndex   = 0;
let charIndex   = 0;
let isDeleting  = false;
let typingDelay = 120;

function typeEffect() {
    const currentWord = typingWords[wordIndex];

    if (isDeleting) {
        typingEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 60;
    } else {
        typingEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 120;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        isDeleting = true;
        typingDelay = 1800;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex  = (wordIndex + 1) % typingWords.length;
        typingDelay = 400;
    }

    setTimeout(typeEffect, typingDelay);
}

// Start typing after loader
setTimeout(typeEffect, 2200);

// ── Scroll Reveal ─────────────────────────────────────────────
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el    = entry.target;
                const delay = parseInt(el.dataset.delay) || 0;

                setTimeout(() => {
                    el.classList.add('revealed');

                    // Animate skill bars
                    if (el.classList.contains('skills-grid')) {
                        animateSkillBars();
                    }
                }, delay);

                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el);
    });
}

// ── Skill Bars ────────────────────────────────────────────────
function animateSkillBars() {
    document.querySelectorAll('.skill-fill').forEach((bar, index) => {
        const targetWidth = bar.dataset.width + '%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 80);
    });
}

// Also observe individual skill cards for stagger
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.skill-card');
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.style.opacity   = '1';
                    card.style.transform = 'translateY(0)';
                    // Animate the bar inside this card
                    const bar = card.querySelector('.skill-fill');
                    if (bar) bar.style.width = bar.dataset.width + '%';
                }, i * 80);
            });
            skillObserver.disconnect();
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);

    // Set initial state for skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.style.opacity   = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity .5s ease, transform .5s ease';
    });
}

// ── Project Card Tilt Effect ──────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect   = card.getBoundingClientRect();
        const x      = e.clientX - rect.left;
        const y      = e.clientY - rect.top;
        const centerX = rect.width  / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -6;
        const rotateY = (x - centerX) / centerX *  6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'all .4s ease';
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform .1s ease';
    });
});

// ── Smooth Scroll ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Back to Top ───────────────────────────────────────────────
const backToTopBtn = document.getElementById('backToTop');

function handleBackToTop() {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Contact Form ──────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalContent = btn.innerHTML;

        // Loading state
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled  = true;

        try {
            const response = await fetch('https://formspree.io/f/mbdwvwvb', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(contactForm)
            });

            if (response.ok) {
                // Berhasil terkirim
                btn.innerHTML = originalContent;
                btn.disabled  = false;
                formSuccess.classList.add('show');
                contactForm.reset();

                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            } else {
                // Gagal
                btn.innerHTML = originalContent;
                btn.disabled  = false;
                alert('Gagal mengirim pesan. Coba lagi.');
            }

        } catch (error) {
            btn.innerHTML = originalContent;
            btn.disabled  = false;
            alert('Terjadi error. Periksa koneksi internet Anda.');
        }
    });
}

// ── Floating Badges Animation ─────────────────────────────────
// Add slight parallax to floating badges
document.addEventListener('mousemove', (e) => {
    const badges = document.querySelectorAll('.float-badge');
    const moveX  = (e.clientX - window.innerWidth  / 2) / 50;
    const moveY  = (e.clientY - window.innerHeight / 2) / 50;

    badges.forEach((badge, i) => {
        const factor = (i + 1) * 0.5;
        badge.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
});

// ── Navbar overlay close on outside click ────────────────────
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// ── Performance: Lazy load images ────────────────────────────
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src || entry.target.src;
                    io.unobserve(entry.target);
                }
            });
        });
        io.observe(img);
    }
});

// ── Console Easter Egg ────────────────────────────────────────
console.log('%c👋 Hey there, curious developer!', 'font-size:18px;font-weight:bold;color:#6c63ff');
console.log('%cThis portfolio was built by Sid with pure HTML, CSS & JavaScript.', 'color:#a78bfa;font-size:13px');
console.log('%cFeel free to reach out! 🚀', 'color:#00d4ff;font-size:13px');
