
const authenticate = (method, username, password) => {
  switch (method) {
    case 'Facebook':
      // do facebook authentocation
      break;
    case 'LinkedIn':
      // do linkedIn authentocation
      break;
    case 'Gmail':
      // Do Gmail authentication
      break;
  }
};
// Switch case will not work
authenticate('Fcebook', 'tamartwe', '1234');
