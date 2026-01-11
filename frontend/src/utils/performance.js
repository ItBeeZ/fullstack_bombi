
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


