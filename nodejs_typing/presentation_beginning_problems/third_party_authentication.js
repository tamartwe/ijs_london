
const authenticate = (method, username, password) => {
  switch (method) {
    case 'Facebook':
      // do facebook authentication
      break;
    case 'LinkedIn':
      // do linkedIn authentication
      break;
    case 'Gmail':
      // Do Gmail authentication
      break;
    default:
      // Throw Error
  }
};
// Switch case will not work
authenticate('Fcebook', 'johnSmith', '1234');
