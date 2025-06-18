#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Preparing deployment files...\n');

try {
  // Step 1: Build the project
  console.log('🔨 Building project...');
  execSync('npm run generate', { stdio: 'inherit' });
  
  const outputDir = '.output/public';
  
  if (!fs.existsSync(outputDir)) {
    throw new Error('Build output not found!');
  }
  
  // Step 2: Create .nojekyll file in output
  console.log('📝 Creating .nojekyll file...');
  fs.writeFileSync(path.join(outputDir, '.nojekyll'), '');
  
  // Step 3: Create _redirects file for SPA routing (if needed)
  console.log('📝 Creating _redirects file for SPA routing...');
  const redirectsContent = `/*    /index.html   200`;
  fs.writeFileSync(path.join(outputDir, '_redirects'), redirectsContent);
  
  // Step 4: Verify critical files
  console.log('🔍 Verifying critical files...');
  const criticalFiles = [
    'index.html',
    '_nuxt/entry.js',
    'LOGO.png'
  ];
  
  criticalFiles.forEach(file => {
    const filePath = path.join(outputDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`   ✅ ${file}`);
    } else {
      console.log(`   ❌ ${file} - MISSING!`);
    }
  });
  
  // Step 5: Check JavaScript files
  console.log('\n📂 Checking JavaScript files...');
  const nuxtDir = path.join(outputDir, '_nuxt');
  if (fs.existsSync(nuxtDir)) {
    const jsFiles = fs.readdirSync(nuxtDir).filter(file => file.endsWith('.js'));
    console.log(`   Found ${jsFiles.length} JavaScript files`);
    jsFiles.forEach(file => {
      const filePath = path.join(nuxtDir, file);
      const stats = fs.statSync(filePath);
      console.log(`   - ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
    });
  }
  
  // Step 6: Create deployment info
  console.log('\n📋 Creating deployment info...');
  const deployInfo = {
    buildTime: new Date().toISOString(),
    files: getAllFiles(outputDir),
    totalSize: getDirectorySize(outputDir)
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'deploy-info.json'), 
    JSON.stringify(deployInfo, null, 2)
  );
  
  console.log('\n✨ Deployment preparation complete!');
  console.log('📋 Next steps:');
  console.log('   1. Copy all contents of .output/public to your hosting repository');
  console.log('   2. Ensure your hosting platform serves .js files with correct MIME type');
  console.log('   3. Commit and push to deploy');
  console.log('\n💡 If you still get module loading errors:');
  console.log('   - Check that your hosting platform serves .js files with MIME type: application/javascript');
  console.log('   - Ensure all files in _nuxt/ directory are accessible');
  console.log('   - Try clearing browser cache and hard refresh');
  
} catch (error) {
  console.error('\n❌ Deployment preparation failed:', error.message);
  process.exit(1);
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.relative('.output/public', fullPath));
    }
  });
  
  return arrayOfFiles;
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(path) {
    const stats = fs.statSync(path);
    if (stats.isDirectory()) {
      const files = fs.readdirSync(path);
      files.forEach(file => {
        calculateSize(path.join(path, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(dirPath);
  return (totalSize / 1024 / 1024).toFixed(2) + ' MB';
} 