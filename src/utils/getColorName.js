const colors = [
  {
    name: 'primary',
    hex: '#518CE3',
  },
  {
    name: 'dark',
    hex: '#2A2C34',
  },
  {
    name: 'secondary',
    hex: '#1E3A65',
  },
  {
    name: 'dark-blue',
    hex: '#3475D6',
  },
];

export default (hex) => {
  const color = colors.filter((c) => c.hex === hex.toUpperCase());
  return color.length !== 0 ? color[0].name : '';
};
