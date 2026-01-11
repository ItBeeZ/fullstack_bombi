/**
 * Image Optimizer Utility
 * 
 * Handles URL transformations for CDN optimization.
 * Currently serves as a pass-through structure, but ready for CDN integration.
 */

// Configuration for CDN (if available in the future)
const CDN_CONFIG = {
  enabled: false, // Set to true when CDN is integrated
  baseUrl: "https://cdn.example.com",
  defaultQuality: 80,
  defaultFormat: "webp"
};

/**
 * Generates an optimized URL for an image based on requested dimensions and format.
 * 
 * @param {string} src - The original source URL of the image
 * @param {object} options - Optimization options
 * @param {number} [options.width] - Target width
 * @param {number} [options.height] - Target height
 * @param {number} [options.quality] - Image quality (1-100)
 * @param {string} [options.format] - Output format (webp, avif, jpg)
 * @returns {string} The optimized URL
 */
export const getOptimizedImageUrl = (src, options = {}) => {
  if (!src) return "";
  
  // If CDN is not enabled or src is not a local asset that needs optimization, return original
  if (!CDN_CONFIG.enabled || src.startsWith("http")) {
    return src;
  }

  // Example implementation for a hypothetical image proxy/CDN
  // const { width, height, quality = CDN_CONFIG.defaultQuality, format = CDN_CONFIG.defaultFormat } = options;
  // const queryParams = [];
  // if (width) queryParams.push(`w=${width}`);
  // if (height) queryParams.push(`h=${height}`);
  // if (quality) queryParams.push(`q=${quality}`);
  // if (format) queryParams.push(`fm=${format}`);
  
  // return `${CDN_CONFIG.baseUrl}${src}?${queryParams.join('&')}`;

  return src;
};

/**
 * Generates srcSet string for responsive images
 * 
 * @param {string} src - The original source URL
 * @param {number[]} widths - Array of widths to generate
 * @returns {string} The srcSet string
 */
export const generateSrcSet = (src, widths = [640, 768, 1024, 1280]) => {
  if (!CDN_CONFIG.enabled) return undefined;

  return widths
    .map(w => `${getOptimizedImageUrl(src, { width: w })} ${w}w`)
    .join(", ");
};
