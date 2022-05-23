import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "/components/Layout";

import { GlobalStyles } from "/styles/GlobalStyles";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Med Movies</title>
      </Head>
      <QueryClientProvider client={client}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
