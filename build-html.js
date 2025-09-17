#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier');

console.log('🔨 Building production HTML...');

try {
    // Read the original HTML file
    const htmlContent = fs.readFileSync('index.html', 'utf8');

    // Replace CSS and JS references with minified versions
    let productionHtml = htmlContent
        .replace('styles.css', 'styles.min.css')
        .replace('script.js', 'script.min.js');

    // Minify the HTML
    const minifiedHtml = minify(productionHtml, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: false, // Don't minify inline CSS to avoid conflicts
        minifyJS: false, // Don't minify inline JS to avoid conflicts
    });

    // Write to dist directory
    fs.writeFileSync('dist/index.html', minifiedHtml);

    console.log('✅ Production HTML built successfully!');
    console.log('📁 Output: dist/index.html');
} catch (error) {
    console.error('❌ Error building HTML:', error.message);
    process.exit(1);
}
