# Niken Yora — Personal Portfolio

Portofolio web untuk Niken Yora. Proyek ini menggunakan konsep desain Tema Senja (Twilight Dusk to Midnight) dengan kombinasi warna dusk plum, twilight violet, dan aksen golden hour amber.

## Konsep Desain & Tipografi

- **Warna Background:** Gradasi dusk violet ke midnight dark (`#1B0C1A` -> `#2C1425` -> `#08040C`) dengan partikel kanvas floating embers.
- **Tipografi:**
  - Headlines: Outfit (Sans-serif display, tracking tight)
  - Body Text: Plus Jakarta Sans (Readable body font, line-height 1.65)
  - Accents & Technical: DM Mono (Untuk angka, label, dan eyebrow section)
- **Kartu & Surface:** Surface kartu menggunakan efek glassmorphism dusk dengan inner highlight dan elevasi bayangan agar tidak menyatu dengan background.

## Fitur Utama

- Hero section dengan subtitle miring dan tombol CTA double-bezel.
- Animasi partikel kanvas floating embers yang ringan.
- Radar skill chart menggunakan Chart.js.
- Filter proyek berdasarkan kategori.
- Form kontak dan hub saluran komunikasi langsung dengan status ketersediaan.

## Struktur Kode

```text
niken-yora.github.io/
├── index.html              # Struktur utama halaman web
├── style.css               # Design system & gaya tampilan Tema Senja
├── app.js                  # Entry point aplikasi JavaScript
├── components/             # Modul render UI
│   ├── renderBlog.js
│   ├── renderCerts.js
│   ├── renderProjects.js
│   ├── renderSkills.js
│   └── renderStats.js
├── data/                   # Data statis portofolio
│   ├── blog.js
│   ├── certs.js
│   ├── profile.js
│   ├── projects.js
│   └── skills.js
└── utils/                  # Utility & sistem partikel kanvas
    ├── animations.js
    ├── chart.js
    ├── filters.js
    └── particles.js
```

## Cara Menjalankan secara Lokal

Proyek ini dibangun menggunakan HTML, CSS, dan Vanilla JavaScript (ES Modules) tanpa bundler.

1. Clone repositori:
   ```bash
   git clone https://github.com/niken-yora/niken-yora.github.io.git
   ```
2. Buka file `index.html` langsung di browser, atau gunakan local HTTP server sederhana (seperti Live Server atau `npx serve`).

## Lisensi

© 2026 Niken Yora. All rights reserved.