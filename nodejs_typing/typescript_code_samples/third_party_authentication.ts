
// method: "Facebook" | "LinkedIn"
// | "Gmail", _username: string, _password: string

const authenticate = (method: "Facebook" | "LinkedIn"
 | "Gmail", _username: string, _password: string) => {
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
   default:
    //Do Something, Throw Error
 }
};
//Compilation error
authenticate('Fcebook', 'tamartwe', '1234'); 
