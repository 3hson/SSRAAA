import UserDataContextProvider from '../lib/userDataContext';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <UserDataContextProvider>
      <Component {...pageProps} />
    </UserDataContextProvider>
  );
}

export default MyApp;

