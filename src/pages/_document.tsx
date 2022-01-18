import { Head, Html, Main, NextScript } from "next/document";

const Document = (): JSX.Element => (
  <Html lang="en-US">
    <Head>
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/favicon.png" rel="icon" type="image/png" />
      <link href="/assets/fonts/montserrat-semibold.ttf" rel="preload" as="font" type="font/ttf" crossOrigin="true" />
      <link href="/assets/fonts/lato-regular.ttf" rel="preload" as="font" type="font/ttf" crossOrigin="true" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
