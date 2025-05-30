function getElementWidth(content, padding, border) {
  return content + padding * 2 + border * 2;
}

console.log(getElementWidth(50, 8, 4));
