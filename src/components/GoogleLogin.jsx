// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import instance from '../api/axios';

// const GoogleLoginButton = () => {
//   const clientId = '317787650438-melnlpu3vcr53d2l4oc2e22f7jg8ra98.apps.googleusercontent.com';

//   const handleLoginSuccess = async (res) => {
//     console.log(res.credential);
//     try {
//       const response = await instance.post('/accounts/google/callback', {
//         token: res.credential,
//       });

//       console.log(response.data);
//     } catch (err) {
//       console.error('Error:', err);
//     }
//   };

//   const handleLoginFailure = (err) => {
//     console.error('Login Failed:', err);
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <GoogleLogin onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleLoginButton;
