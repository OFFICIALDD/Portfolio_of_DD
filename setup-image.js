// Image Setup Helper Script
// Run this after placing your image in the public folder

const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'public', 'dhruv-portrait.jpg');

if (fs.existsSync(imagePath)) {
  console.log('✅ Portrait image found at:', imagePath);
  console.log('🎬 Cinematic animations are ready!');
  console.log('🚀 Run "npm start" to see your portfolio with the image');
} else {
  console.log('❌ Portrait image not found');
  console.log('📁 Please save your image as: public/dhruv-portrait.jpg');
  console.log('📐 Recommended size: 800x1000px (4:5 aspect ratio)');
  console.log('🎨 Format: JPG (optimized for web)');
}

// Check if the image meets recommended specifications
if (fs.existsSync(imagePath)) {
  const stats = fs.statSync(imagePath);
  const fileSizeInMB = stats.size / (1024 * 1024);
  
  console.log(`📊 Image size: ${fileSizeInMB.toFixed(2)} MB`);
  
  if (fileSizeInMB > 2) {
    console.log('⚠️  Consider optimizing the image size for better performance');
    console.log('💡 Recommended: < 2MB for optimal loading');
  } else {
    console.log('✅ Image size is optimized for web');
  }
}