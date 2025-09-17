# 🚀 Panduan Deployment AutomationEdu

Panduan lengkap untuk deploy website AutomationEdu ke berbagai platform hosting.

## 📋 Daftar Isi

1. [GitHub Pages](#github-pages)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [Firebase Hosting](#firebase-hosting)
5. [Surge.sh](#surgesh)
6. [Custom Domain](#custom-domain)

---

## 🐙 GitHub Pages

### Langkah 1: Persiapan Repository

```bash
# 1. Buat repository baru di GitHub
# 2. Clone repository ke local
git clone https://github.com/username/automation-edu.git
cd automation-edu

# 3. Copy semua file website ke folder repository
# 4. Commit dan push
git add .
git commit -m "Initial commit: AutomationEdu website"
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab **Settings**
3. Scroll ke bagian **Pages**
4. Di **Source**, pilih **Deploy from a branch**
5. Pilih branch **main** dan folder **/ (root)**
6. Klik **Save**

### Langkah 3: Akses Website

Website akan tersedia di: `https://username.github.io/automation-edu`

**⏱️ Waktu Deploy:** 1-5 menit  
**💰 Biaya:** Gratis  
**🔄 Auto Deploy:** Ya (setiap push ke main branch)

---

## 🌐 Netlify

### Metode 1: Drag & Drop

1. Buka [netlify.com](https://netlify.com)
2. Daftar/login dengan akun GitHub
3. Drag & drop folder website ke area deploy
4. Website langsung live!

### Metode 2: Git Integration

1. Login ke Netlify
2. Klik **New site from Git**
3. Pilih **GitHub** dan authorize
4. Pilih repository `automation-edu`
5. Build settings:
    - **Build command:** (kosongkan)
    - **Publish directory:** (kosongkan atau `/`)
6. Klik **Deploy site**

### Custom Domain di Netlify

1. Buka site dashboard
2. Klik **Domain settings**
3. Klik **Add custom domain**
4. Masukkan domain Anda
5. Update DNS records sesuai instruksi

**⏱️ Waktu Deploy:** 1-3 menit  
**💰 Biaya:** Gratis (dengan fitur premium berbayar)  
**🔄 Auto Deploy:** Ya  
**🌍 CDN:** Ya (global)

---

## ⚡ Vercel

### Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd automation-edu
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (pilih account Anda)
# - Link to existing project? N
# - Project name: automation-edu
# - In which directory? ./
```

### Deploy via GitHub

1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik **New Project**
4. Import repository `automation-edu`
5. Configure:
    - **Framework Preset:** Other
    - **Build Command:** (kosongkan)
    - **Output Directory:** (kosongkan)
6. Klik **Deploy**

**⏱️ Waktu Deploy:** 30 detik - 2 menit  
**💰 Biaya:** Gratis (dengan limits)  
**🔄 Auto Deploy:** Ya  
**🌍 CDN:** Ya (Edge Network)

---

## 🔥 Firebase Hosting

### Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize project
cd automation-edu
firebase init hosting

# Pilih:
# - Use existing project atau create new
# - Public directory: . (current directory)
# - Single-page app: N
# - Overwrite index.html: N
```

### Deploy

```bash
firebase deploy
```

### Custom Domain

```bash
firebase hosting:channel:deploy live --only hosting
```

**⏱️ Waktu Deploy:** 1-3 menit  
**💰 Biaya:** Gratis (1GB storage, 10GB transfer/month)  
**🔄 Auto Deploy:** Manual (atau setup CI/CD)  
**🌍 CDN:** Ya (Google's CDN)

---

## 🌊 Surge.sh

### Setup & Deploy

```bash
# Install Surge
npm install -g surge

# Deploy
cd automation-edu
surge

# First time:
# - Email: (masukkan email)
# - Password: (buat password)
# - Domain: (gunakan default atau custom)
```

### Update

```bash
# Update website
surge --domain your-domain.surge.sh
```

**⏱️ Waktu Deploy:** 30 detik  
**💰 Biaya:** Gratis (dengan ads) / $30/month (pro)  
**🔄 Auto Deploy:** Manual  
**🌍 CDN:** Ya

---

## 🌐 Custom Domain

### 1. Beli Domain

Rekomendasi registrar:

- **Namecheap** - Murah dan reliable
- **GoDaddy** - Popular dan mudah
- **Cloudflare** - Dengan CDN gratis
- **Niagahoster** - Provider lokal Indonesia

### 2. Setup DNS

Untuk **GitHub Pages:**

```
Type: CNAME
Name: www
Value: username.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

Untuk **Netlify:**

```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

### 3. SSL Certificate

Semua platform modern (GitHub Pages, Netlify, Vercel) menyediakan SSL gratis via Let's Encrypt.

---

## 🔧 Optimasi Pre-Deploy

### 1. Minify Files

```bash
# Install tools
npm install -g html-minifier clean-css-cli uglify-js

# Minify HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js
```

### 2. Optimize Images

```bash
# Install imagemin
npm install -g imagemin-cli imagemin-webp

# Convert to WebP
imagemin assets/images/*.jpg --out-dir=assets/images/webp --plugin=webp
```

### 3. Gzip Compression

Tambahkan file `.htaccess` (untuk Apache):

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

---

## 📊 Monitoring & Analytics

### 1. Google Analytics

Tambahkan ke `<head>`:

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

### 2. Google Search Console

1. Buka [search.google.com/search-console](https://search.google.com/search-console)
2. Add property dengan domain Anda
3. Verify ownership
4. Submit sitemap.xml

### 3. Performance Monitoring

Tools yang direkomendasikan:

- **Google PageSpeed Insights**
- **GTmetrix**
- **Lighthouse** (built-in Chrome DevTools)

---

## 🚀 CI/CD Automation

### GitHub Actions

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
    push:
        branches: [main]

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2

            - name: Setup Node.js
              uses: actions/setup-node@v2
              with:
                  node-version: '16'

            - name: Install dependencies
              run: npm install

            - name: Build
              run: npm run build

            - name: Deploy
              uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./dist
```

---

## 🔍 Troubleshooting

### Common Issues

**1. 404 Error pada GitHub Pages**

- Pastikan file `index.html` ada di root directory
- Check branch dan folder settings di GitHub Pages

**2. CSS/JS tidak load**

- Pastikan path relatif (tanpa leading slash)
- Check case sensitivity pada nama file

**3. Slow loading**

- Optimize images (gunakan WebP)
- Minify CSS/JS files
- Enable gzip compression

**4. Mobile tidak responsive**

- Check viewport meta tag
- Test di berbagai device sizes

### Debug Tools

```bash
# Check DNS propagation
nslookup your-domain.com

# Test website speed
curl -w "@curl-format.txt" -o /dev/null -s "https://your-domain.com"

# Validate HTML
curl -s "https://validator.w3.org/nu/?doc=https://your-domain.com"
```

---

## 📞 Support

Jika mengalami masalah deployment:

1. **GitHub Pages**: [GitHub Support](https://support.github.com)
2. **Netlify**: [Netlify Support](https://www.netlify.com/support/)
3. **Vercel**: [Vercel Support](https://vercel.com/support)
4. **Firebase**: [Firebase Support](https://firebase.google.com/support)

---

**🎉 Selamat! Website AutomationEdu Anda sudah live!**

Jangan lupa untuk:

- ✅ Test semua fitur setelah deploy
- ✅ Setup monitoring dan analytics
- ✅ Backup website secara berkala
- ✅ Update konten secara rutin
