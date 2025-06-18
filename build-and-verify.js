#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting build and verification process...\n');

try {
  // Step 1: Clean previous build
  console.log('📁 Cleaning previous build...');
  if (fs.existsSync('.output')) {
    fs.rmSync('.output', { recursive: true, force: true });
  }
  
  // Step 2: Build the project
  console.log('🔨 Building project with Nuxt generate...');
  execSync('npm run generate', { stdio: 'inherit' });
  
  // Step 3: Verify images are copied
  console.log('\n🔍 Verifying images in output directory...');
  
  const outputPublicDir = '.output/public';
  const publicDir = 'public';
  
  // Check if output directory exists
  if (!fs.existsSync(outputPublicDir)) {
    throw new Error('Output directory not found! Build may have failed.');
  }
  
  // List all files in public directory
  const publicFiles = getAllFiles(publicDir);
  const imageFiles = publicFiles.filter(file => 
    /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(file)
  );
  
  console.log(`📸 Found ${imageFiles.length} image files in public directory:`);
  imageFiles.forEach(file => {
    const relativePath = path.relative(publicDir, file);
    console.log(`   - ${relativePath}`);
  });
  
  // Check if images are in output
  console.log('\n✅ Checking if images are in output directory...');
  let missingImages = [];
  
  imageFiles.forEach(file => {
    const relativePath = path.relative(publicDir, file);
    const outputPath = path.join(outputPublicDir, relativePath);
    
    if (!fs.existsSync(outputPath)) {
      missingImages.push(relativePath);
      console.log(`   ❌ Missing: ${relativePath}`);
    } else {
      console.log(`   ✅ Found: ${relativePath}`);
    }
  });
  
  if (missingImages.length > 0) {
    console.log(`\n⚠️  Warning: ${missingImages.length} images are missing from output!`);
    console.log('This might cause issues in production.');
  } else {
    console.log('\n🎉 All images are properly copied to output directory!');
  }
  
  // Step 4: Show output structure
  console.log('\n📂 Output directory structure:');
  showDirectoryStructure(outputPublicDir, 0);
  
  console.log('\n✨ Build and verification complete!');
  console.log('📋 Next steps:');
  console.log('   1. Copy the contents of .output/public to your hosting repository');
  console.log('   2. Commit and push to deploy');
  
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  
  return arrayOfFiles;
}

function showDirectoryStructure(dirPath, level = 0) {
  const indent = '  '.repeat(level);
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      console.log(`${indent}📁 ${item}/`);
      showDirectoryStructure(fullPath, level + 1);
    } else {
      const size = (stats.size / 1024).toFixed(1);
      console.log(`${indent}📄 ${item} (${size} KB)`);
    }
  });
} 