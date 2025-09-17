# 🚀 Quick Start Guide - AutomationEdu

Panduan cepat untuk menjalankan website AutomationEdu dengan npm dalam 5 menit!

## ⚡ Langkah Cepat

### 1. Download/Clone Project

```bash
# Clone dari GitHub (jika sudah di upload)
git clone https://github.com/username/automation-edu.git
cd automation-edu

# Atau download ZIP dan extract
```

### 2. Install Dependencies

```bash
# Install Node.js dependencies
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Jalankan Development Server

```bash
# Start development server dengan live reload
npm start
# atau
npm run dev

# Website akan terbuka otomatis di http://localhost:3000
```

### 4. Build untuk Production

```bash
# Build website yang dioptimasi untuk production
npm run build

# Serve production build
npm run serve
# Website akan tersedia di http://localhost:8080
```

### 5. Deploy ke GitHub Pages

```bash
# Metode 1: Manual setup
# 1. Buat repository baru di GitHub bernama "automation-edu"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/automation-edu.git
git push -u origin main

# 2. Aktifkan GitHub Pages di Settings → Pages
# Source: Deploy from branch, Branch: main, folder: / (root)

# Metode 2: Otomatis dengan npm (setelah setup repository)
npm run deploy:gh-pages
```

Website akan live di: `https://USERNAME.github.io/automation-edu`

## 🎨 Kustomisasi Cepat

### Ubah Informasi Kontak

Edit file `index.html` bagian contact:

```html
<!-- Cari section id="contact" dan ubah -->
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>EMAIL_ANDA@domain.com</span>
</div>
```

### Ubah Warna Tema

Edit file `styles.css` di bagian atas:

```css
/* Cari dan ubah warna-warna ini */
--primary-color: #2563eb; /* Biru utama */
--accent-color: #ffd700; /* Emas/kuning */
```

### Tambah Konten

- **Kursus baru**: Edit section `#courses` di `index.html`
- **Tutorial baru**: Edit section `#tutorials` di `index.html`
- **Proyek baru**: Edit section `#projects` di `index.html`

## 📦 NPM Commands

### Development

```bash
npm start          # Start development server (port 3000)
npm run dev        # Alias untuk npm start
npm run build      # Build untuk production
npm run serve      # Serve production build (port 8080)
```

### Code Quality

```bash
npm run lint       # Lint CSS dan JavaScript
npm run lint:css   # Lint hanya CSS
npm run lint:js    # Lint hanya JavaScript
npm run format     # Format semua file dengan Prettier
npm test           # Run linting dan HTML validation
```

### Deployment

```bash
npm run deploy:gh-pages  # Deploy ke GitHub Pages
npm run deploy:netlify   # Deploy ke Netlify
npm run deploy:surge     # Deploy ke Surge.sh
```

### Utilities

```bash
npm run clean            # Bersihkan folder dist
npm run optimize:images  # Optimasi gambar
npm run validate:html    # Validasi HTML
```

## 🛠️ Tools yang Dibutuhkan

### Wajib

- **Node.js** (v16 atau lebih baru)
- **npm** (v8 atau lebih baru)
- **Browser modern** (Chrome, Firefox, Safari, Edge)
- **Text Editor** (VS Code, Sublime, Atom)

### Opsional (untuk development)

- **Git** - untuk version control
- **Yarn** - alternatif npm package manager

## 📱 Test Responsiveness

Buka website dan test di:

- **Desktop** (1920x1080)
- **Tablet** (768x1024)
- **Mobile** (375x667)

Gunakan Chrome DevTools (F12) → Toggle device toolbar untuk test berbagai ukuran.

## 🚀 Deploy Options (Pilih Salah Satu)

| Platform         | Waktu Setup | Biaya  | Auto Deploy |
| ---------------- | ----------- | ------ | ----------- |
| **GitHub Pages** | 5 menit     | Gratis | ✅          |
| **Netlify**      | 3 menit     | Gratis | ✅          |
| **Vercel**       | 2 menit     | Gratis | ✅          |
| **Surge.sh**     | 1 menit     | Gratis | ❌          |

## 🔧 Troubleshooting

**Website tidak muncul?**

- Pastikan file `index.html` ada
- Check console browser (F12) untuk error
- Pastikan semua file di folder yang sama

**CSS tidak load?**

- Check path file `styles.css` di `index.html`
- Pastikan nama file exact match (case sensitive)

**Mobile tidak responsive?**

- Pastikan ada `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## 📞 Butuh Bantuan?

1. **Baca dokumentasi lengkap**: `README.md`
2. **Panduan deployment detail**: `DEPLOYMENT.md`
3. **Create issue** di GitHub repository
4. **Email**: info@automationedu.com

---

**🎉 Selamat! Website Anda sudah siap!**

Next steps:

- ✅ Customize konten sesuai kebutuhan
- ✅ Setup Google Analytics
- ✅ Add custom domain (opsional)
- ✅ Share ke social media!
