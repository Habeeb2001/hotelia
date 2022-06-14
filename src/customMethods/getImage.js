export function getImage(img) {
    return new URL(`../assets/images/${img}.webp`, import.meta.url).href;
  }
  