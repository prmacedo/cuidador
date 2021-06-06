export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
      console.log({ Authorization: 'Bearer ' + user.token })
      return { Authorization: 'Bearer ' + user.token }; 
     // return { 'x-access-token': user.accessToken };       
    } else {
      return {};
    }
  }