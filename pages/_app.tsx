import GlobalStyle from '../styles/GlobalStyle'
import type { AppProps } from 'next/app'
import Header from '../components/common/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
