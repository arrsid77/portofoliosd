// ============================================================
// translate.js — Sistem Terjemahan EN ↔ ID
// Cara kerja: menyimpan semua teks di objek translations,
// lalu mengganti innerHTML elemen target saat toggle diklik.
// Teks asli HTML tidak diubah — aman & mudah di-maintain.
// ============================================================

const translations = {

    // ── NAVBAR ───────────────────────────────────────────────
    'nav-home':     { en: 'Home',     id: 'Beranda' },
    'nav-about':    { en: 'About',    id: 'Tentang' },
    'nav-skills':   { en: 'Skills',   id: 'Keahlian' },
    'nav-projects': { en: 'Projects', id: 'Proyek' },
    'nav-contact':  { en: 'Contact',  id: 'Kontak' },
    'nav-experience':{ en: 'Experience', id: 'Pengalaman' },

    // ── HERO ─────────────────────────────────────────────────
    'hero-badge':       { en: 'Available for work',    id: 'Siap untuk bekerja' },
    'hero-title':       {en: 'Hi, I\'m <span class="gradient-text">Sid</span>', id: 'Hai, Saya <span class="gradient-text">Sid</span>'},
    'hero-typing-prefix': { en: "I'm a ",              id: 'Saya seorang ' },
    'hero-desc':        {
        en: 'Passionate about crafting beautiful, functional web experiences. I turn ideas into reality through clean code and thoughtful design.',
        id: 'Bersemangat dalam membangun pengalaman web yang indah dan fungsional. Saya mewujudkan ide menjadi kenyataan melalui kode yang bersih dan desain yang penuh pertimbangan.'
    },
    'hero-btn-projects': { en: 'View Projects', id: 'Lihat Proyek' },
    'hero-btn-cv':       { en: 'Download CV',   id: 'Unduh CV' },
    'stat-label-projects': { en: 'Projects',    id: 'Proyek' },
    'stat-label-skills':   { en: 'Skills',      id: 'Keahlian' },
    'stat-label-passion':  { en: 'Passion',     id: 'Semangat' },
    'scroll-down':         { en: 'Scroll down', id: 'Gulir ke bawah' },

    // ── ABOUT ────────────────────────────────────────────────
    'about-tag':   { en: '// about me',  id: '// tentang saya' },
    'about-title': { en: 'Who I Am',     id: 'Siapa Saya' },
    'about-lead':  {
        en: "I'm <strong>Alfi</strong>, also known as <strong>Sid</strong>, and I am a fresh graduate from SMK Adi Sanggoro and a passionate Junior Web Developer who enjoys building things for the web. I believe that great software should be both visually appealing and highly functional.",
        id: 'Saya <strong>Alfi</strong> atau bisa dipanggil <strong>Sid</strong>, saya fresh graduate dari SMK Adi Sanggoro dan seorang junior web developer yang bersemangat dan suka membangun sesuatu di web. Saya percaya perangkat lunak yang hebat harus indah sekaligus fungsional.'
    },
    'about-p2': {
        en: 'My journey began when I entered the world of Information Technology at SMK Adi Sanggoro. From that point, my curiosity about how websites work grew into a strong passion for creating meaningful digital experiences. I focus on writing clean and efficient code while building interfaces that are intuitive, responsive, and comfortable to use.',
        id: 'Perjalanan saya dimulai saat saya memasuki dunia IT di SMK Adi Sanggoro dan dari situ rasa penasaran saya tentang cara kerja website muncul dan tumbuh menjadi kecintaan mendalam dalam menciptakan pengalaman digital. Saya fokus menulis kode yang bersih dan efisien serta membuat antarmuka yang benar-benar nyaman digunakan.'
    },
    'about-p3': {
        en: "When I'm not coding, I'm exploring new technologies, studying UI/UX principles, or working on personal projects that solve real problems for real people — like the <strong>WantaCell</strong> catalog system I built for my family's business.",
        id: 'Saat tidak coding, saya menjelajahi teknologi baru, mempelajari prinsip UI/UX, atau mengerjakan proyek pribadi yang memecahkan masalah nyata — seperti sistem katalog <strong>WantaCell</strong> yang saya buat untuk usaha keluarga.'
    },
    'about-p4': {
        en: "Beyond web development, I also have experience as a person in charge in departmental organizational activities and helping with family store operations. This experience has shaped my ability to communicate, lead a team, and provide good service to customers.",
        id: 'Di luar web development, saya juga memiliki pengalaman sebagai penanggung jawab dalam kegiatan organisasi jurusan serta membantu operasional toko keluarga. Pengalaman tersebut membentuk kemampuan saya dalam berkomunikasi, memimpin tim, dan memberikan pelayanan yang baik kepada pelanggan.'
    },
    'tag-student':  { en: '🎓 Fresh Graduate',       id: '🎓 Fresh Graduate' },
    'tag-self':     { en: '💻 Self-taught',    id: '💻 Otodidak' },
    'tag-uiux':     { en: '🎨 UI/UX Lover',   id: '🎨 Pecinta UI/UX' },
    'tag-learner':  { en: '🚀 Fast Learner',   id: '🚀 Cepat Belajar' },
    'tag-solver':   { en: '🛠️ Problem Solver', id: '🛠️ Pemecah Masalah' },

    // About cards
    'card-code-title': { en: 'Clean Code',      id: 'Kode Bersih' },
    'card-code-desc':  { en: 'I write readable, maintainable code following best practices and modern standards.', id: 'Saya menulis kode yang mudah dibaca dan dipelihara mengikuti praktik terbaik dan standar modern.' },
    'card-design-title': { en: 'Good Design',   id: 'Desain Baik' },
    'card-design-desc':  { en: 'UI/UX matters. I care about every pixel and create interfaces that delight users.', id: 'UI/UX itu penting. Saya peduli setiap piksel dan membuat antarmuka yang menyenangkan pengguna.' },
    'card-fast-title':   { en: 'Fast Delivery', id: 'Pengerjaan Cepat' },
    'card-fast-desc':    { en: 'I work efficiently and deliver projects on time without compromising quality.', id: 'Saya bekerja efisien dan menyelesaikan proyek tepat waktu tanpa mengorbankan kualitas.' },
    'card-learn-title':  { en: 'Always Learning', id: 'Selalu Belajar' },
    'card-learn-desc':   { en: "Tech evolves fast. I'm constantly learning new tools and improving my skills.", id: 'Teknologi berkembang pesat. Saya terus mempelajari alat baru dan meningkatkan kemampuan.' },

    // ── SKILLS ───────────────────────────────────────────────
    'skills-tag':   { en: '// skills',         id: '// keahlian' },
    'skills-title': { en: 'What I Work With',  id: 'Yang Saya Kuasai' },

    // ── PROJECTS ─────────────────────────────────────────────
    'projects-tag':   { en: '// projects',      id: '// proyek' },
    'projects-title': { en: "Things I've Built", id: 'Yang Telah Saya Buat' },

    // Project descriptions
    'proj1-desc': {
        en: 'Digital price catalog for a family shop. Displays retail & wholesale prices, product management, and automatic price history tracking.',
        id: 'Katalog harga digital untuk warung keluarga. Menampilkan harga eceran & grosir, manajemen produk, dan riwayat harga otomatis.'
    },
    'proj2-desc': {
        en: 'Makes it easier for customers to create new accounts through the BRILink Wanta website without having to go through a bank.',
        id: 'Memudahkan pelanggan dalam membuat rekening baru melalui website BRILink Wanta tanpa harus melalui bank.'
    },
    'proj3-desc': {
        en: 'Web-based digital attendance app for recording student attendance with real-time reports and data export.',
        id: 'Aplikasi absensi digital berbasis web untuk pencatatan kehadiran siswa dengan laporan real-time dan export data.'
    },
    'proj4-desc': {
        en: 'Event management platform with participant registration, event schedule, and automated web-based notifications.',
        id: 'Platform manajemen event dengan fitur registrasi peserta, jadwal acara, dan notifikasi otomatis berbasis web.'
    },
    'proj5-desc': {
        en: 'Personal portfolio website with premium dark mode, smooth animations, typing effect, and responsive modern design.',
        id: 'Website portofolio pribadi dengan dark mode premium, animasi smooth, typing effect, dan desain modern yang responsif.'
    },
    'proj6-desc': {
        en: 'Interactive temperature converter that converts Celsius, Fahrenheit, Kelvin, and Reamur in real-time.',
        id: 'Aplikasi konversi suhu interaktif yang mengkonversi Celsius, Fahrenheit, Kelvin, dan Reamur secara real-time.'
    },
    'btn-live': { en: 'Live Demo', id: 'Demo Langsung' },

    // ── CONTACT ──────────────────────────────────────────────
    'contact-tag':   { en: '// contact',           id: '// kontak' },
    'contact-title': { en: "Let's Work Together",  id: 'Ayo Bekerja Sama' },
    'contact-desc':  { en: "Have a project in mind? Let's talk and make something great.", id: 'Punya proyek? Mari ngobrol dan buat sesuatu yang luar biasa.' },
    'contact-h3':    { en: 'Get In Touch',          id: 'Hubungi Saya' },
    'contact-p':     {
        en: "I'm currently open to new opportunities and collaborations. Whether you have a project, question, or just want to say hi — my inbox is always open!",
        id: 'Saya sedang terbuka untuk peluang dan kolaborasi baru. Apakah Anda punya proyek, pertanyaan, atau sekadar ingin menyapa — inbox saya selalu terbuka!'
    },
    'form-label-name':    { en: 'Name',    id: 'Nama' },
    'form-ph-name':       { en: 'Your name',                   id: 'Nama Anda' },
    'form-ph-message':    { en: 'Tell me about your project...', id: 'Ceritakan proyek Anda...' },
    'form-btn-send':      { en: 'Send Message',                 id: 'Kirim Pesan' },
    'form-success-msg':   { en: "Message sent! I'll get back to you soon.", id: 'Pesan terkirim! Saya akan segera membalas.' },

    // ── FOOTER ───────────────────────────────────────────────
    'footer-copy': { en: '© 2026 Sid. All rights reserved.', id: '© 2026 Sid. Semua hak dilindungi.' },

    // ── TYPING WORDS ─────────────────────────────────────────
    'typing-words': {
        en: ['Web Developer', 'UI/UX Enthusiast', 'Student', 'Problem Solver', 'Creative Coder'],
        id:  ['Web Developer', 'Penggemar UI/UX',  'Pelajar', 'Pemecah Masalah', 'Pembuat Kreatif']
    }
};

// ── State ─────────────────────────────────────────────────────
let currentLang = 'en';

// ── Helper: animasi fade saat ganti teks ─────────────────────
function setTextAnimated(el, html) {
    el.classList.add('translating');
    setTimeout(() => {
        el.innerHTML = html;
        el.classList.remove('translating');
    }, 125);
}

// ── Main translate function ───────────────────────────────────
function applyTranslation(lang) {
    const t = translations;

    // NAVBAR links
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys  = ['nav-home','nav-about','nav-skills','nav-experience','nav-projects','nav-contact'];
    navLinks.forEach((el, i) => {
        if (navKeys[i]) setTextAnimated(el, t[navKeys[i]][lang]);
    });

    // HERO
    const heroBadgeSpans = document.querySelectorAll('.hero-badge');
    heroBadgeSpans.forEach(el => {
        const dot = el.querySelector('.badge-dot');
        setTextAnimated(el, (dot ? '<span class="badge-dot"></span>' : '') + ' ' + t['hero-badge'][lang]);
    });

    const heroKnown = document.querySelector('.hero-title');
    if (heroKnown) setTextAnimated(heroKnown, t['hero-title'][lang]);

    const typingPrefix = document.querySelector('.typing-prefix');
    if (typingPrefix) setTextAnimated(typingPrefix, t['hero-typing-prefix'][lang]);

    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) setTextAnimated(heroDesc, t['hero-desc'][lang]);

    // Hero buttons
    const heroBtns = document.querySelectorAll('.hero-actions .btn span');
    if (heroBtns[0]) setTextAnimated(heroBtns[0], t['hero-btn-projects'][lang]);
    if (heroBtns[1]) setTextAnimated(heroBtns[1], t['hero-btn-cv'][lang]);

    // Stats labels
    const statLabels = document.querySelectorAll('.stat-label');
    const statKeys   = ['stat-label-projects','stat-label-skills','stat-label-passion'];
    statLabels.forEach((el, i) => {
        if (statKeys[i]) setTextAnimated(el, t[statKeys[i]][lang]);
    });

    // Scroll down
    const scrollSpan = document.querySelector('.scroll-indicator span');
    if (scrollSpan) setTextAnimated(scrollSpan, t['scroll-down'][lang]);

    // ABOUT section tag & title
    const aboutTag = document.querySelector('.about .section-tag');
    if (aboutTag) setTextAnimated(aboutTag, t['about-tag'][lang]);

    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) setTextAnimated(aboutTitle, t['about-title'][lang]);

    // About paragraphs
    const aboutParas = document.querySelectorAll('.about-text p');
    if (aboutParas[0]) setTextAnimated(aboutParas[0], t['about-lead'][lang]);
    if (aboutParas[1]) setTextAnimated(aboutParas[1], t['about-p2'][lang]);
    if (aboutParas[2]) setTextAnimated(aboutParas[2], t['about-p3'][lang]);
    if (aboutParas[3]) setTextAnimated(aboutParas[3], t['about-p4'][lang]);

    // About tags
    const tags    = document.querySelectorAll('.about-tags .tag');
    const tagKeys = ['tag-student','tag-self','tag-uiux','tag-learner','tag-solver'];
    tags.forEach((el, i) => {
        if (tagKeys[i]) setTextAnimated(el, t[tagKeys[i]][lang]);
    });

    // About cards
    const cards = document.querySelectorAll('.about-card');
    const cardData = [
        { title: 'card-code-title',   desc: 'card-code-desc' },
        { title: 'card-design-title', desc: 'card-design-desc' },
        { title: 'card-fast-title',   desc: 'card-fast-desc' },
        { title: 'card-learn-title',  desc: 'card-learn-desc' },
    ];
    cards.forEach((card, i) => {
        if (!cardData[i]) return;
        const h3 = card.querySelector('h3');
        const p  = card.querySelector('p');
        if (h3) setTextAnimated(h3, t[cardData[i].title][lang]);
        if (p)  setTextAnimated(p,  t[cardData[i].desc][lang]);
    });

    // SKILLS section tag & title
    const skillsTag = document.querySelector('.skills .section-tag');
    if (skillsTag) setTextAnimated(skillsTag, t['skills-tag'][lang]);

    const skillsTitle = document.querySelector('.skills .section-title');
    if (skillsTitle) setTextAnimated(skillsTitle, t['skills-title'][lang]);

    // PROJECTS section tag & title
    const projTag = document.querySelector('.projects .section-tag');
    if (projTag) setTextAnimated(projTag, t['projects-tag'][lang]);

    const projTitle = document.querySelector('.projects .section-title');
    if (projTitle) setTextAnimated(projTitle, t['projects-title'][lang]);

    // Project descriptions
    const projDescs = document.querySelectorAll('.project-desc');
    const projDescKeys = ['proj1-desc','proj2-desc','proj3-desc','proj4-desc','proj5-desc','proj6-desc'];
    projDescs.forEach((el, i) => {
        if (projDescKeys[i]) setTextAnimated(el, t[projDescKeys[i]][lang]);
    });

    // Live Demo buttons (in projects)
    document.querySelectorAll('.project-btn:not(.project-btn-ghost)').forEach(btn => {
        const icon = btn.querySelector('i');
        const iconHTML = icon ? icon.outerHTML + ' ' : '';
        setTextAnimated(btn, iconHTML + t['btn-live'][lang]);
    });

    // CONTACT section
    const contactTag = document.querySelector('.contact .section-tag');
    if (contactTag) setTextAnimated(contactTag, t['contact-tag'][lang]);

    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) setTextAnimated(contactTitle, t['contact-title'][lang]);

    const contactDesc = document.querySelector('.contact .section-desc');
    if (contactDesc) setTextAnimated(contactDesc, t['contact-desc'][lang]);

    const contactH3 = document.querySelector('.contact-info h3');
    if (contactH3) setTextAnimated(contactH3, t['contact-h3'][lang]);

    const contactP = document.querySelector('.contact-info > p');
    if (contactP) setTextAnimated(contactP, t['contact-p'][lang]);

    // Form labels & placeholders
    const labelName = document.querySelector('label[for="name"]');
    if (labelName) setTextAnimated(labelName, t['form-label-name'][lang]);

    const inputName = document.getElementById('name');
    if (inputName) inputName.placeholder = t['form-ph-name'][lang];

    const inputMsg = document.getElementById('message');
    if (inputMsg) inputMsg.placeholder = t['form-ph-message'][lang];

    // Form submit button
    const formBtn = document.querySelector('.contact-form button[type="submit"] span');
    if (formBtn) setTextAnimated(formBtn, t['form-btn-send'][lang]);

    // Form success message
    const successMsg = document.getElementById('formSuccess');
    if (successMsg) {
        const icon = successMsg.querySelector('i');
        const iconHTML = icon ? icon.outerHTML + ' ' : '';
        successMsg.innerHTML = iconHTML + t['form-success-msg'][lang];
    }

    // FOOTER copyright
    const footerCopy = document.querySelector('.footer-text');
    if (footerCopy) setTextAnimated(footerCopy, t['footer-copy'][lang]);

    // Update typing words language
    updateTypingLanguage(lang);

    // Update page lang attribute
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
}

// ── Update typing words for current language ──────────────────
// Integrates with existing typing effect in script.js
function updateTypingLanguage(lang) {
    // Expose typed words globally so script.js can pick them up
    window.typingWordsCurrent = translations['typing-words'][lang];
}

// ── Toggle Handler ────────────────────────────────────────────
const langToggle = document.getElementById('langToggle');
const langLabel  = document.getElementById('langLabel');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';

    // Update button appearance
    langLabel.textContent = currentLang === 'id' ? 'EN' : 'ID';
    langToggle.classList.toggle('active', currentLang === 'id');

    // Apply translation with a small visual pop
    langToggle.style.transform = 'scale(.93)';
    setTimeout(() => langToggle.style.transform = '', 150);

    // Translate everything
    applyTranslation(currentLang);

    // Save preference
    localStorage.setItem('sid-lang', currentLang);
});

// ── Restore saved language preference ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('sid-lang');
    if (saved && saved !== 'en') {
        currentLang = saved;
        langLabel.textContent = 'EN';
        langToggle.classList.add('active');
        // Delay sedikit agar DOM dan script.js selesai load
        setTimeout(() => applyTranslation(currentLang), 2200);
    }
});

// ── Patch typing effect to respect language changes ───────────
// Override typingWords dari script.js saat bahasa berubah
const _origSetInterval = setInterval;
window.typingWordsCurrent = translations['typing-words']['en'];

// Expose helper untuk script.js jika perlu sinkronisasi
window.getCurrentTypingWords = () => window.typingWordsCurrent;

// ══════════════════════════════════════════════════════════════
// TRANSLATIONS EXTENSION — Experience, Beyond Coding, Soft Skills
// Ditambahkan sebagai extension dari applyTranslation yang sudah ada
// ══════════════════════════════════════════════════════════════

const newTranslations = {

    // ── EXPERIENCE ────────────────────────────────────────────
    'exp-tag':                { en: '// experience',       id: '// pengalaman' },
    'exp-title':              { en: 'My Experience',       id: 'Pengalaman Saya' },
    'exp-webdev-heading':     { en: 'Web Development',     id: 'Web Development' },
    'exp-additional-heading': { en: 'Additional Experience', id: 'Pengalaman Tambahan' },
    'exp-badge-personal':     { en: 'Personal Project',    id: 'Proyek Pribadi' },
    'exp-badge-student':      { en: 'Student Project',     id: 'Proyek Siswa' },
    'exp-badge-org':          { en: 'Organizational',      id: 'Organisasi' },
    'exp-badge-store':        { en: 'Store',               id: 'Toko' },
    'exp-item1-title': { en: 'Web Developer for Family Business',  id: 'Web Developer untuk Usaha Keluarga' },
    'exp-item1-desc':  {
        en: 'Building web applications for real-world needs, including a digital price catalog system (WantaCell) for a family business, covering full-stack development with PHP, MySQL, and Bootstrap.',
        id: 'Membangun aplikasi web untuk kebutuhan nyata, termasuk sistem katalog harga digital (WantaCell) untuk usaha keluarga, mencakup pengembangan full-stack dengan PHP, MySQL, dan Bootstrap.'
    },
    'exp-item2-title': { en: 'Web Development Student',  id: 'Siswa Web Development' },
    'exp-item2-desc':  {
        en: 'Actively learning and building web projects ranging from attendance systems, event management, to temperature converter applications while studying web technologies at SMK Adi Sanggoro.',
        id: 'Aktif belajar dan membangun proyek web mulai dari sistem absensi, manajemen event, hingga aplikasi konversi suhu sambil mempelajari teknologi web di SMK Adi Sanggoro.'
    },
    'exp-item3-title': { en: 'Organizational Experience', id: 'Pengalaman Organisasi' },
    'exp-item3-desc':  {
        en: 'As a Person in Charge (PJ) in departmental organizational activities, I was responsible for coordinating activities, communicating with team members, and ensuring events ran well.',
        id: 'Sebagai Penanggung Jawab (PJ) pada kegiatan organisasi jurusan, saya bertanggung jawab mengoordinasikan jalannya kegiatan, berkomunikasi dengan anggota tim, dan memastikan acara berjalan dengan baik.'
    },
    'exp-item4-title': { en: 'Store Assistant', id: 'Asisten Toko' },
    'exp-item4-desc':  {
        en: 'Helping with family store operations by serving customers, managing product stock, and handling daily activities. This experience helped me develop customer service skills, responsibility, and stock management.',
        id: 'Membantu operasional toko keluarga dengan melayani pelanggan, mengelola stok barang, dan menangani aktivitas harian. Pengalaman ini membantu saya mengembangkan keterampilan customer service, tanggung jawab, dan manajemen stok.'
    },

    // ── BEYOND CODING ─────────────────────────────────────────
    'beyond-tag':      { en: '// beyond coding', id: '// di luar coding' },
    'beyond-title':    { en: 'Beyond Coding',    id: 'Di Luar Coding' },
    'beyond-desc': {
        en: 'I believe that experience outside the coding world also plays an important role in shaping professional skills, especially in communication, leadership, and service.',
        id: 'Saya percaya bahwa pengalaman di luar dunia coding juga berperan penting dalam membentuk keterampilan profesional, terutama dalam komunikasi, kepemimpinan, dan pelayanan.'
    },
    'beyond-c1-title': { en: 'Organizational Activities', id: 'Kegiatan Organisasi' },
    'beyond-c1-desc':  {
        en: 'Active in departmental organizational activities as Person in Charge, coordinating events and managing team communication effectively.',
        id: 'Aktif dalam kegiatan organisasi jurusan sebagai Penanggung Jawab, mengoordinasikan acara dan mengelola komunikasi tim secara efektif.'
    },
    'beyond-c2-title': { en: 'Customer Service',    id: 'Pelayanan Pelanggan' },
    'beyond-c2-desc':  {
        en: 'Experienced in serving customers at a family store, developing communication, patience, and problem-solving skills in real situations.',
        id: 'Berpengalaman melayani pelanggan di toko keluarga, mengembangkan keterampilan komunikasi, kesabaran, dan pemecahan masalah dalam situasi nyata.'
    },
    'beyond-c3-title': { en: 'Team Leadership',     id: 'Kepemimpinan Tim' },
    'beyond-c3-desc':  {
        en: 'Led small teams in organizational activities, learning how to motivate members, delegate tasks, and ensure goals are achieved together.',
        id: 'Memimpin tim kecil dalam kegiatan organisasi, belajar cara memotivasi anggota, mendelegasikan tugas, dan memastikan tujuan tercapai bersama.'
    },
    'beyond-c4-title': { en: 'Inventory Management', id: 'Manajemen Stok' },
    'beyond-c4-desc':  {
        en: 'Managing product stock at a family store, recording incoming and outgoing goods, and maintaining data accuracy for daily operations.',
        id: 'Mengelola stok produk di toko keluarga, mencatat barang masuk dan keluar, serta menjaga akurasi data untuk operasional harian.'
    },

    // ── SOFT SKILLS ───────────────────────────────────────────
    'soft-tag':   { en: '// soft skills',            id: '// keterampilan' },
    'soft-title': { en: 'Experience & Other Skills', id: 'Pengalaman & Keterampilan Lainnya' },
    'soft-desc':  {
        en: 'Beyond web development, I also have experience in organizational activities and store operations that helped me develop communication, leadership, and responsibility skills.',
        id: 'Selain pengalaman saya di bidang web development, saya juga memiliki pengalaman dalam organisasi dan operasional toko yang membantu saya mengembangkan keterampilan komunikasi, kepemimpinan, dan tanggung jawab.'
    },
    'soft-leadership':    { en: 'Leadership',           id: 'Kepemimpinan' },
    'soft-teamcoord':     { en: 'Team Coordination',    id: 'Koordinasi Tim' },
    'soft-custservice':   { en: 'Customer Service',     id: 'Pelayanan Pelanggan' },
    'soft-inventory':     { en: 'Inventory Management', id: 'Manajemen Stok' },
    'soft-communication': { en: 'Communication',        id: 'Komunikasi' },
    'soft-responsibility':{ en: 'Responsibility',       id: 'Tanggung Jawab' },
    'soft-problemsolving':{ en: 'Problem Solving',      id: 'Pemecahan Masalah' },
    'soft-timemanagement':{ en: 'Time Management',      id: 'Manajemen Waktu' },
};

// ── Extended translate function ───────────────────────────────
function applyTranslationFull(lang) {
    // Jalankan fungsi translate original dulu
    applyTranslation(lang);

    const nt = newTranslations;

    // Helper: set teks by ID
    function setId(id, html) {
        const el = document.getElementById(id);
        if (el) setTextAnimated(el, html);
    }

    // EXPERIENCE
    setId('exp-tag',                nt['exp-tag'][lang]);
    setId('exp-title',              nt['exp-title'][lang]);
    setId('exp-webdev-heading',     nt['exp-webdev-heading'][lang]);
    setId('exp-additional-heading', nt['exp-additional-heading'][lang]);
    setId('exp-badge-personal',     nt['exp-badge-personal'][lang]);
    setId('exp-badge-student',      nt['exp-badge-student'][lang]);
    setId('exp-badge-org',          nt['exp-badge-org'][lang]);
    setId('exp-badge-store',        nt['exp-badge-store'][lang]);
    setId('exp-item1-title',        nt['exp-item1-title'][lang]);
    setId('exp-item1-desc',         nt['exp-item1-desc'][lang]);
    setId('exp-item2-title',        nt['exp-item2-title'][lang]);
    setId('exp-item2-desc',         nt['exp-item2-desc'][lang]);
    setId('exp-item3-title',        nt['exp-item3-title'][lang]);
    setId('exp-item3-desc',         nt['exp-item3-desc'][lang]);
    setId('exp-item4-title',        nt['exp-item4-title'][lang]);
    setId('exp-item4-desc',         nt['exp-item4-desc'][lang]);

    // BEYOND CODING
    setId('beyond-tag',     nt['beyond-tag'][lang]);
    setId('beyond-title',   nt['beyond-title'][lang]);
    setId('beyond-desc',    nt['beyond-desc'][lang]);
    setId('beyond-c1-title',nt['beyond-c1-title'][lang]);
    setId('beyond-c1-desc', nt['beyond-c1-desc'][lang]);
    setId('beyond-c2-title',nt['beyond-c2-title'][lang]);
    setId('beyond-c2-desc', nt['beyond-c2-desc'][lang]);
    setId('beyond-c3-title',nt['beyond-c3-title'][lang]);
    setId('beyond-c3-desc', nt['beyond-c3-desc'][lang]);
    setId('beyond-c4-title',nt['beyond-c4-title'][lang]);
    setId('beyond-c4-desc', nt['beyond-c4-desc'][lang]);

    // SOFT SKILLS
    setId('soft-tag',           nt['soft-tag'][lang]);
    setId('soft-title',         nt['soft-title'][lang]);
    setId('soft-desc',          nt['soft-desc'][lang]);
    setId('soft-leadership',    nt['soft-leadership'][lang]);
    setId('soft-teamcoord',     nt['soft-teamcoord'][lang]);
    setId('soft-custservice',   nt['soft-custservice'][lang]);
    setId('soft-inventory',     nt['soft-inventory'][lang]);
    setId('soft-communication', nt['soft-communication'][lang]);
    setId('soft-responsibility',nt['soft-responsibility'][lang]);
    setId('soft-problemsolving',nt['soft-problemsolving'][lang]);
    setId('soft-timemanagement',nt['soft-timemanagement'][lang]);
}

// ── Override tombol langToggle pakai fungsi extended ──────────
// Clone node agar event listener lama terlepas bersih
(function() {
    const oldBtn = document.getElementById('langToggle');
    if (!oldBtn) return;
    const newBtn = oldBtn.cloneNode(true);
    oldBtn.parentNode.replaceChild(newBtn, oldBtn);

    newBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'id' : 'en';

        const lbl = document.getElementById('langLabel');
        if (lbl) lbl.textContent = currentLang === 'id' ? 'EN' : 'ID';
        newBtn.classList.toggle('active', currentLang === 'id');

        newBtn.style.transform = 'scale(.93)';
        setTimeout(() => newBtn.style.transform = '', 150);

        applyTranslationFull(currentLang);
        localStorage.setItem('sid-lang', currentLang);
    });

    // Restore saved preference
    const saved = localStorage.getItem('sid-lang');
    if (saved && saved !== 'en') {
        currentLang = saved;
        const lbl = document.getElementById('langLabel');
        if (lbl) lbl.textContent = 'EN';
        newBtn.classList.add('active');
        setTimeout(() => applyTranslationFull(saved), 2400);
    }
})();
