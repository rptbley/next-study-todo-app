import GlobalStyle from '../styles/GlobalStyle';
import type { AppProps } from 'next/app';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
