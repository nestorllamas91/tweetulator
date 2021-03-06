import "@/shared/styles.css";

import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
