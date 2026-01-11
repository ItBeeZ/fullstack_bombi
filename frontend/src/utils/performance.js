
/**
 * Prefetches a list of images into the browser cache.
 * @param {string[]} images - Array of image URLs to prefetch.
 */
export const prefetchImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

/**
 * Loads images in chunks to avoid blocking the main thread.
 * @param {string[]} images - Array of image URLs to load.
 * @param {number} chunkSize - Number of images to load at once.
 * @param {number} delay - Delay in ms between chunks.
 * @param {function} onChunkLoaded - Optional callback when a chunk is loaded.
 */
export const loadImagesInChunks = (images, chunkSize = 3, delay = 150, onChunkLoaded) => {
  let i = 0;
  
  const loadNext = () => {
    if (i >= images.length) return;
    
    const chunk = images.slice(i, i + chunkSize);
    chunk.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    
    if (onChunkLoaded) {
      onChunkLoaded(chunk, i);
    }
    
    i += chunkSize;
    
    if (i < images.length) {
      setTimeout(loadNext, delay);
    }
  };
  
  loadNext();
};
