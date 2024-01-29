// pages/_app.js
import { UserProvider } from '../context/UserContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Head>
                {/* Bootstrap CSS CDN */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3pV0n4z7NmJ6Mx00TweHbKIiUr6PIi8jwVn0pX5y2UuH5zMR6" crossorigin="anonymous" />
                {/* Diğer global CSS dosyalarınızı buraya ekleyin */}
            </Head>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
