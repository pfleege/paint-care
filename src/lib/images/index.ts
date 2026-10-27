// src/lib/images/index.ts

// Using CDN image library: use IMAGE_CDN constant to change provider
// Placeholder added for when image load fails

export const IMAGE_CDN = "https://cdn.pixabay.com/photo";
export const PLACEHOLDER = "IMAGE_PATH";

// Check if image is available: -> Uses placeholder if no path is provided
export const isPlaceholder = (path: string) => path.startsWith(PLACEHOLDER);
export const cdnUrl = (path: string) => `${IMAGE_CDN}/${path}`;
