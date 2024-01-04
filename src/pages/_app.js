import '../styles/globals.css';
import Header from'../components/header/Header.tsx';
import Footer from'../components/footer/Footer.tsx';

function MyApp({ Component, pageProps }) {
    return (
      <div>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    );
  }
  
  export default MyApp;