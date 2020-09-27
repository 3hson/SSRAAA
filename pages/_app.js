import UserDataContextProvider from '../lib/userDataContext';
import { getCookie } from '../lib/cookies';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <UserDataContextProvider>
      <Component {...pageProps} />
    </UserDataContextProvider>
  );
}

export async function getServerSideProps(ctx) {
  let token = '';
  if(ctx.req) {
    if(ctx.req.headers.cookie) {
      token =  getCookie('token', ctx.req);
    }
  } else {
    token = JSON.parse(window.localStorage.getItem('userData')).token;
  }
  return { props: { token } };

}

export default MyApp;

