/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// O(n) - time (number of pixels), O(n) - space (call stack size)

var floodFill = function (image, sr, sc, color) {
  const initColor = image[sr][sc];

  if (initColor === color || !image.length || !image) {
    return image;
  }

  function fill(image, r, c, newColor, color) {
    if (
      r < 0 ||
      r >= image.length ||
      c < 0 ||
      c >= image[0].length ||
      initColor !== image[r][c]
    ) {
      return;
    }
    image[r][c] = newColor;
    fill(image, r - 1, c, newColor, color); //rop
    fill(image, r, c - 1, newColor, color); // left
    fill(image, r + 1, c, newColor, color); // down
    fill(image, r, c + 1, newColor, color); //right
  }

  fill(image, sr, sc, color, initColor);

  return image;
};
