const { execSync } = require('child_process');
const fs = require('fs');

const images = [
  { name: 'slide4.jpg', maxW: 1200 },
  { name: 'slide1.jpg', maxW: 1200 },
  { name: 'slide6.jpg', maxW: 1200 },
  { name: 'AEO.jpg', maxW: 1200 },
  { name: 'slide5.jpg', maxW: 1200 },
  { name: '5.jpg', maxW: 1200 },
  { name: 'Locations.jpg', maxW: 1200 },
  { name: 'About.jpg', maxW: 1200 }
];

images.forEach(img => {
  const src = 'public/images/' + img.name;
  const tmp = 'public/images/' + img.name.replace(/\.jpg$/, '-opt.jpg');
  const webp = 'public/images/' + img.name.replace(/\.jpg$/, '.webp');
  
  const origSize = fs.statSync(src).size;
  
  // Resize to max 1200px width with quality 85
  execSync(`ffmpeg -i "${src}" -vf "scale=w='min(${img.maxW},iw)':h=-2" -q:v 3 "${tmp}" -y`, { stdio: 'ignore' });
  execSync(`ffmpeg -i "${src}" -vf "scale=w='min(${img.maxW},iw)':h=-2" -c:v libwebp -quality 82 "${webp}" -y`, { stdio: 'ignore' });
  
  const newJpgSize = fs.statSync(tmp).size;
  const webpSize = fs.statSync(webp).size;
  
  fs.renameSync(tmp, src);
  
  console.log(`${img.name}: ${Math.round(origSize/1024)} KB -> ${Math.round(newJpgSize/1024)} KB (optimized JPG) | ${Math.round(webpSize/1024)} KB (WebP)`);
});
