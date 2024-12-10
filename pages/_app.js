import './docs.css'; 
import './fonts.css'; 
import './globals.css'; 

function MyApp({ Component, pageProps, router }) {
  return (
    <Component {...pageProps} key={router.route} />
  );
}

export default MyApp;
