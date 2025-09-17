# AutomationEdu - Website Edukasi Otomasi Industri

![AutomationEdu](https://img.shields.io/badge/AutomationEdu-v1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Tentang Proyek

AutomationEdu adalah website edukasi modern yang dirancang khusus untuk engineer otomasi industri. Website ini menyediakan platform pembelajaran komprehensif dengan konten berkualitas tinggi tentang teknologi otomasi terdepan.

### ✨ Fitur Utama

- **🎯 Desain Modern & Responsif** - Interface yang clean dan user-friendly
- **📚 Kursus Terstruktur** - PLC Programming, SCADA Systems, Industrial Robotics
- **🎥 Tutorial Interaktif** - Video tutorial dan panduan step-by-step
- **🛠️ Proyek Praktis** - Implementasi real-world automation projects
- **📱 Mobile Friendly** - Optimized untuk semua device
- **🌙 Dark Mode** - Toggle tema gelap/terang
- **🔍 Search Function** - Pencarian cepat dengan Ctrl+K
- **📧 Contact Form** - Form kontak dengan validasi
- **⚡ Performance Optimized** - Fast loading dengan lazy loading

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantic dan modern
- **CSS3** - Styling dengan Flexbox, Grid, dan Animations
- **JavaScript (ES6+)** - Interaktivitas dan dynamic content
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Inter font family)

## 📁 Struktur Proyek

```
automation-edu/
├── index.html          # Halaman utama
├── styles.css          # Stylesheet utama
├── script.js           # JavaScript functionality
├── README.md           # Dokumentasi proyek
├── .gitignore          # Git ignore file
└── assets/             # Folder untuk gambar dan media (opsional)
    ├── images/
    └── videos/
```

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/automation-edu.git
cd automation-edu
```

### 2. Buka di Browser

Karena ini adalah static website, Anda bisa langsung membuka `index.html` di browser:

```bash
# Menggunakan Live Server (recommended)
# Install Live Server extension di VS Code, kemudian klik kanan pada index.html > "Open with Live Server"

# Atau buka langsung di browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 3. Development Server (Opsional)

Untuk development yang lebih baik, gunakan local server:

```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .

# Menggunakan PHP
php -S localhost:8000
```

Kemudian buka `http://localhost:8000` di browser.

## 🌐 Deploy ke GitHub Pages

### Langkah 1: Persiapan Repository

1. Buat repository baru di GitHub
2. Upload semua file ke repository

```bash
git init
git add .
git commit -m "Initial commit: AutomationEdu website"
git branch -M main
git remote add origin https://github.com/username/automation-edu.git
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** tab
3. Scroll ke bagian **Pages**
4. Di **Source**, pilih **Deploy from a branch**
5. Pilih branch **main** dan folder **/ (root)**
6. Klik **Save**

### Langkah 3: Akses Website

Website akan tersedia di: `https://username.github.io/automation-edu`

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit variabel CSS di `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #ffd700;
    --text-color: #333;
    --bg-color: #ffffff;
}
```

### Menambah Konten

1. **Kursus Baru**: Edit section `#courses` di `index.html`
2. **Tutorial Baru**: Edit section `#tutorials` di `index.html`
3. **Proyek Baru**: Edit section `#projects` di `index.html`

### Mengubah Informasi Kontak

Edit section `#contact` di `index.html` dan sesuaikan:

- Email address
- Social media links
- Contact information

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ⚡ Performance Tips

1. **Optimize Images**: Gunakan format WebP untuk gambar
2. **Minify CSS/JS**: Gunakan tools seperti UglifyJS
3. **Enable Gzip**: Configure server untuk compression
4. **CDN**: Gunakan CDN untuk static assets

## 🔧 Fitur JavaScript

### Navigation

- Mobile hamburger menu
- Smooth scrolling
- Active link highlighting

### Animations

- Intersection Observer untuk scroll animations
- Counter animations di hero section
- Parallax effects

### Interactive Elements

- Contact form validation
- Notification system
- Theme toggle (dark/light mode)
- Search functionality (Ctrl+K)

### Performance

- Lazy loading untuk images
- Debounced scroll events
- Efficient DOM manipulation

## 🎯 SEO Optimization

Website sudah dioptimasi untuk SEO:

- Semantic HTML structure
- Meta tags yang proper
- Alt text untuk images
- Structured data (dapat ditambahkan)
- Fast loading speed

## 📊 Analytics (Opsional)

Untuk menambahkan Google Analytics, tambahkan kode berikut sebelum `</head>`:

```html
<!-- Google Analytics -->
<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛡️ Security

- Form validation untuk mencegah XSS
- No inline JavaScript
- Secure external links dengan `rel="noopener"`

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**AutomationEdu Team**

- Email: info@automationedu.com
- LinkedIn: [AutomationEdu](https://linkedin.com/in/automationedu)
- GitHub: [AutomationEdu](https://github.com/automationedu)

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com) untuk icons
- [Google Fonts](https://fonts.google.com) untuk typography
- [Unsplash](https://unsplash.com) untuk placeholder images
- Komunitas developer Indonesia untuk inspirasi

---

**Made with ❤️ for Automation Engineers**
