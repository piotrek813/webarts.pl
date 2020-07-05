export default (bg) => {
  switch (bg) {
    case 'dark':
      return 'dark-blue';
    case 'primary':
    case 'dark-blue':
      return 'secondary';
    case 'secondary':
      return 'primary';
    default:
      // eslint-disable-next-line no-console
      console.log('color that you specify is incorrect');
  }

  return 'primary';
};
