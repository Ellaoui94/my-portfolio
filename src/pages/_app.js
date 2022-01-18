import Theme from '../styles/theme';
import imgStyle from '../components/Hero/imgStyle.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 