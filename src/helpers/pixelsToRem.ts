/**
 * Converts size in pixels to rem.
 *
 * @param pixels - Size in pixels.
 * @param baseFontSize - Base font size in pixels (default 16px).
 * @returns Size in rem.
 */
export function pixelsToRem(pixels: number, baseFontSize: number = 16): string {
  if (baseFontSize <= 0) {
    throw new Error('Base font size must be greater than zero.');
  }
  return `${pixels / baseFontSize}rem`;
}
