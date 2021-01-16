import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Seed Application</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
