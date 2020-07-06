const colors = ['secondary', 'primary', 'dark'];
let colorsIterator = 0;

export default () => {
  if (colorsIterator >= colors.length) colorsIterator = 0;

  const color = colors[colorsIterator];
  colorsIterator += 1;

  return color;
};
