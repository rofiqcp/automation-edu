#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up AutomationEdu development environment...\n');

// Check Node.js version
const nodeVersion = process.version;
const requiredVersion = 'v16.0.0';
console.log(`📦 Node.js version: ${nodeVersion}`);

if (nodeVersion < requiredVersion) {
    console.error(`❌ Node.js ${requiredVersion} or higher is required`);
    process.exit(1);
}

// Check if package.json exists
if (!fs.existsSync('package.json')) {
    console.error('❌ package.json not found');
    process.exit(1);
}

try {
    // Install dependencies
    console.log('📥 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    // Setup Husky
    console.log('🪝 Setting up Git hooks...');
    try {
        execSync('npx husky install', { stdio: 'inherit' });
        console.log('✅ Husky installed successfully');
    } catch (error) {
        console.warn('⚠️  Husky setup failed (this is OK if not using Git)');
    }

    // Create dist directory if it doesn't exist
    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
        console.log('📁 Created dist directory');
    }

    // Create assets directory if it doesn't exist
    const assetsDir = path.join(__dirname, 'assets');
    if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir);
        fs.mkdirSync(path.join(assetsDir, 'images'));
        console.log('📁 Created assets directory');
    }

    console.log('\n✅ Setup completed successfully!');
    console.log('\n🎯 Next steps:');
    console.log('   npm start     - Start development server');
    console.log('   npm run build - Build for production');
    console.log('   npm test      - Run tests and linting');
    console.log('\n📖 Read QUICK_START.md for more information');
} catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
}
