# 🚀 Portfolio Sid — Web Developer

Website portofolio pribadi dengan dark mode premium.

## Cara Pakai

1. Extract folder `portfolio-sid`
2. Buka `index.html` di browser — langsung jalan! (tidak perlu server)
3. Atau upload ke GitHub Pages / Netlify / hosting manapun

## Kustomisasi

### Ganti Foto Profil
1. Taruh foto Anda di `assets/images/profile.jpg`
2. Di `index.html`, uncomment baris:
   ```html
   <img src="assets/images/profile.jpg" alt="Sid" loading="lazy">
   ```
3. Hapus atau comment div `profile-placeholder`

### Ganti CV
Ganti file `assets/cv.pdf` dengan CV Anda.

### Ubah Info Kontak
Di `index.html`, cari section `#contact` dan ubah:
- Email, Instagram, GitHub, LinkedIn URL

### Ubah Warna Aksen
Di `style.css`, ubah variabel:
```css
--accent: #6c63ff;   /* Warna utama (ungu) */
--cyan:   #00d4ff;   /* Warna aksen kedua */
```

### Tambah/Edit Project
Di `index.html`, cari section `#projects` dan duplikat `.project-card`.

## Struktur File
```
portfolio-sid/
├── index.html    ← Halaman utama
├── style.css     ← Semua styling
├── script.js     ← Semua interaksi
└── assets/
    ├── images/   ← Taruh foto profil di sini
    ├── icons/    ← Icon tambahan
    └── cv.pdf    ← CV Anda
```

## Deploy ke GitHub Pages (Gratis!)
1. Upload semua file ke repository GitHub
2. Settings → Pages → Source: main branch
3. Website live di: `https://username.github.io/nama-repo`

> ✅ Website ini BISA di GitHub Pages karena murni HTML/CSS/JS!
