import fs from 'fs';
import path from 'path';

const brainDir = '/Users/apple/.gemini/antigravity-ide/brain/63b2ade6-f29d-49d5-af3e-6589e740a5af';
const targetDirs = [
  '/Users/apple/work/assets',
  '/Users/apple/work/public/assets'
];

// Check if user has studio-site
if (fs.existsSync('/Users/apple/studio-site')) {
  targetDirs.push('/Users/apple/studio-site/assets');
  targetDirs.push('/Users/apple/studio-site/public/assets');
}

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const imageMap = {
  'hero_sports_bg_1788272100443.png': 'hero.jpg',
  'project_freeride_1788272117744.png': 'project_freeride.jpg',
  'project_night_running_1788272144642.png': 'project_night_running.jpg',
  'project_swimmer_1788272164689.png': 'project_swimmer.jpg',
  'project_basketball_1788272190013.png': 'project_basketball.jpg',
  'service_commercial_1788272239999.png': 'service_commercial.jpg',
  'service_photography_1788272352233.png': 'service_photography.jpg',
  'service_drone_1788272377639.png': 'service_drone.jpg',
  'service_post_1788272454449.png': 'service_post.jpg',
  'story_stadium_1788272475710.png': 'story_stadium.jpg'
};

for (const [srcName, destName] of Object.entries(imageMap)) {
  const srcPath = path.join(brainDir, srcName);
  if (fs.existsSync(srcPath)) {
    targetDirs.forEach(dir => {
      const destPath = path.join(dir, destName);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${srcName} -> ${destPath}`);
    });
  } else {
    console.warn(`Source image not found: ${srcPath}`);
  }
}
