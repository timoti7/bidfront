// pages/_app.js
import '../../styles/globals.css';  // Global CSS yolu

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
