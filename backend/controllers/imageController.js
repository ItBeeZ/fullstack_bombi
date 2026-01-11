const fs = require('fs');
const path = require('path');

// Paths to image directories (relative to backend root)
// Assuming backend is at root/backend and images are at root/frontend/public/assets/images
const FRONTEND_ASSETS_PATH = path.join(__dirname, '../../frontend/public');
const CARPLAY_DIR = '/assets/images/services/carplay';
const SOFTWARE_DIR = '/assets/images/services/szoftver_utolagos_extrak';

const getImagesFromDir = (dirPath) => {
    const fullPath = path.join(FRONTEND_ASSETS_PATH, dirPath);
    try {
        if (!fs.existsSync(fullPath)) {
            console.error(`Directory not found: ${fullPath}`);
            return [];
        }
        const files = fs.readdirSync(fullPath);
        return files
            .filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file))
            .map(file => path.join(dirPath, file).replace(/\\/g, '/')); // Ensure web-friendly paths
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
        return [];
    }
};

const getRandomItems = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

exports.getSoftwareServiceImages = (req, res) => {
    try {
        const carplayImages = getImagesFromDir(CARPLAY_DIR);
        const softwareImages = getImagesFromDir(SOFTWARE_DIR);

        // 5 random images for each section
        const carplaySection = getRandomItems(carplayImages, 5);
        const softwareSection = getRandomItems(softwareImages, 5);

        // 8 random images for the main gallery (from combined pool)
        const allImages = [...carplayImages, ...softwareImages];
        const gallery = getRandomItems(allImages, 8);

        res.status(200).json({
            sections: {
                carplay: carplaySection,
                software: softwareSection
            },
            gallery: gallery,
            allCarplay: carplayImages,
            allSoftware: softwareImages
        });
    } catch (error) {
        console.error('Error in getSoftwareServiceImages:', error);
        res.status(500).json({ message: 'Server error fetching images' });
    }
};
