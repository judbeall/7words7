const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, 0, 512);
gradient.addColorStop(0, '#1a4b8c');
gradient.addColorStop(1, '#ffd700');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 512, 512);

// Add text
ctx.fillStyle = 'white';
ctx.font = 'bold 120px SF Pro Display, -apple-system, BlinkMacSystemFont';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('7W7', 256, 256);

// Convert to PNG
const pngData = canvas.toDataURL('image/png');
require('fs').writeFileSync('/Users/judbeall/Documents/vibe-coding/icon.png', Buffer.from(pngData.split(',')[1], 'base64'));
