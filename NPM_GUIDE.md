# 📦 NPM Development Guide - AutomationEdu

Panduan lengkap menggunakan npm untuk development website AutomationEdu.

## 🚀 Quick Setup

```bash
# 1. Clone repository
git clone https://github.com/username/automation-edu.git
cd automation-edu

# 2. Install dependencies (akan otomatis menjalankan setup)
npm install

# 3. Start development
npm start
```

## 📋 Available Scripts

### 🔧 Development Commands

| Command         | Description                                 | Port |
| --------------- | ------------------------------------------- | ---- |
| `npm start`     | Start development server dengan live reload | 3000 |
| `npm run dev`   | Alias untuk npm start                       | 3000 |
| `npm run build` | Build optimized untuk production            | -    |
| `npm run serve` | Serve production build                      | 8080 |
| `npm run clean` | Bersihkan folder dist                       | -    |

### 🧹 Code Quality

| Command                 | Description                       |
| ----------------------- | --------------------------------- |
| `npm run lint`          | Lint CSS dan JavaScript           |
| `npm run lint:css`      | Lint hanya CSS files              |
| `npm run lint:js`       | Lint hanya JavaScript files       |
| `npm run format`        | Format code dengan Prettier       |
| `npm test`              | Run semua tests (lint + validate) |
| `npm run validate:html` | Validasi HTML structure           |

### 🚀 Deployment

| Command                   | Platform     | Description            |
| ------------------------- | ------------ | ---------------------- |
| `npm run deploy:gh-pages` | GitHub Pages | Deploy ke GitHub Pages |
| `npm run deploy:netlify`  | Netlify      | Deploy ke Netlify      |
| `npm run deploy:surge`    | Surge.sh     | Deploy ke Surge.sh     |

### 🛠️ Utilities

| Command                   | Description                   |
| ------------------------- | ----------------------------- |
| `npm run setup`           | Setup development environment |
| `npm run optimize:images` | Optimize images untuk web     |
| `npm run copy:assets`     | Copy assets ke dist folder    |

## 📁 Project Structure

```
automation-edu/
├── 📄 index.html              # Main HTML file
├── 🎨 styles.css              # Main stylesheet
├── ⚡ script.js               # Main JavaScript
├── 📦 package.json            # NPM configuration
├── 🔧 setup.js                # Setup script
├── 📚 README.md               # Project documentation
├── 🚀 QUICK_START.md          # Quick start guide
├── 🌐 DEPLOYMENT.md           # Deployment guide
├── 📖 NPM_GUIDE.md            # This file
├── 📄 LICENSE                 # MIT License
├── 🚫 .gitignore              # Git ignore rules
├── 🔍 .eslintrc.json          # ESLint configuration
├── 🎨 .stylelintrc.json       # Stylelint configuration
├── ✨ .prettierrc             # Prettier configuration
├── ✅ .htmlvalidate.json      # HTML validation rules
├── 🪝 .husky/                 # Git hooks
│   └── pre-commit             # Pre-commit hook
├── 🤖 .github/                # GitHub workflows
│   └── workflows/
│       └── ci.yml             # CI/CD pipeline
└── 📦 dist/                   # Production build output
    ├── index.html             # Minified HTML
    ├── styles.min.css         # Minified CSS
    ├── script.min.js          # Minified JavaScript
    └── assets/                # Optimized assets
```

## 🔄 Development Workflow

### 1. Initial Setup

```bash
# Clone dan setup
git clone https://github.com/username/automation-edu.git
cd automation-edu
npm install  # Otomatis menjalankan setup
```

### 2. Daily Development

```bash
# Start development server
npm start

# Di terminal lain, jalankan linting saat coding
npm run lint

# Format code sebelum commit
npm run format
```

### 3. Before Commit

```bash
# Test semua
npm test

# Build untuk memastikan tidak ada error
npm run build

# Commit (pre-commit hook akan otomatis run)
git add .
git commit -m "feat: add new feature"
```

### 4. Deployment

```bash
# Deploy ke GitHub Pages
npm run deploy:gh-pages

# Atau deploy ke platform lain
npm run deploy:netlify
npm run deploy:surge
```

## ⚙️ Configuration Files

### ESLint (.eslintrc.json)

Mengatur aturan JavaScript linting:

- Indent: 4 spaces
- Quotes: single quotes
- Semicolons: required
- No unused variables: warning
- Prefer const: error

### Stylelint (.stylelintrc.json)

Mengatur aturan CSS linting:

- Indent: 4 spaces
- String quotes: single
- Color format: lowercase hex
- No duplicate selectors
- No !important declarations

### Prettier (.prettierrc)

Code formatting rules:

- Tab width: 4 spaces
- Single quotes: true
- Semicolons: true
- Print width: 80 characters
- Trailing commas: ES5

### HTML Validate (.htmlvalidate.json)

HTML validation rules:

- Semantic HTML structure
- Accessibility checks
- No inline styles (warning)
- Proper ARIA usage

## 🔧 Troubleshooting

### Common Issues

**1. npm install gagal**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

**2. Live server tidak jalan**

```bash
# Install global jika perlu
npm install -g live-server

# Atau gunakan npx
npx live-server --port=3000 --open=/index.html
```

**3. Build gagal**

```bash
# Check dependencies
npm ls

# Install missing dependencies
npm install

# Run individual build steps
npm run clean
npm run minify:css
npm run minify:js
npm run minify:html
```

**4. Linting errors**

```bash
# Auto-fix yang bisa diperbaiki
npm run lint:js -- --fix
npm run format

# Check specific files
npx eslint script.js
npx stylelint styles.css
```

### Performance Tips

**1. Faster npm install**

```bash
# Gunakan npm ci untuk production
npm ci

# Atau gunakan yarn (lebih cepat)
yarn install
```

**2. Parallel builds**

```bash
# Install npm-run-all untuk parallel execution
npm install --save-dev npm-run-all

# Update package.json scripts
"build": "npm-run-all clean --parallel minify:*"
```

**3. Watch mode untuk development**

```bash
# Watch CSS changes
npm run lint:css -- --watch

# Watch JS changes
npm run lint:js -- --watch
```

## 🚀 Advanced Usage

### Custom Build Process

Buat file `build.js` untuk custom build:

```javascript
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Custom build logic
console.log('🏗️  Building AutomationEdu...');

// Clean dist
execSync('npm run clean');

// Minify files
execSync('npm run minify:css');
execSync('npm run minify:js');
execSync('npm run minify:html');

// Copy assets
execSync('npm run copy:assets');

console.log('✅ Build completed!');
```

### Environment Variables

Buat file `.env` untuk environment-specific settings:

```bash
# .env
NODE_ENV=development
PORT=3000
SITE_URL=http://localhost:3000
ANALYTICS_ID=GA_MEASUREMENT_ID
```

### NPM Scripts Hooks

Gunakan npm lifecycle hooks:

```json
{
    "scripts": {
        "prebuild": "npm run lint",
        "build": "webpack --mode production",
        "postbuild": "npm run optimize:images",
        "prestart": "npm run setup",
        "start": "live-server",
        "poststart": "echo 'Server started!'"
    }
}
```

## 📊 Monitoring & Analytics

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Analyze bundle size
npm run build
npx webpack-bundle-analyzer dist/
```

### Performance Monitoring

```bash
# Lighthouse CI
npm install --save-dev @lhci/cli

# Run lighthouse
npx lhci autorun
```

## 🤝 Team Development

### Shared Configuration

Pastikan semua team member menggunakan:

- Node.js version yang sama (lihat `engines` di package.json)
- npm scripts yang consistent
- Same linting rules
- Same formatting rules

### Git Hooks

Pre-commit hooks memastikan code quality:

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run precommit
```

### CI/CD Integration

GitHub Actions akan otomatis:

- Run tests pada setiap push
- Deploy ke GitHub Pages pada push ke main
- Check code quality
- Build dan upload artifacts

---

## 📞 Need Help?

- 📖 **Documentation**: README.md
- 🚀 **Quick Start**: QUICK_START.md
- 🌐 **Deployment**: DEPLOYMENT.md
- 🐛 **Issues**: GitHub Issues
- 📧 **Email**: info@automationedu.com

**Happy coding! 🚀**
