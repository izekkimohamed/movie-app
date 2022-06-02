import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { useStore } from "../store/detailsStore";

import Layout from "../components/Layout";

import { GlobalStyles } from "/styles/GlobalStyles";

const client = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  const { trailer } = useStore((state) => state);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Med Movies</title>
      </Head>
      <QueryClientProvider client={client}>
        <GlobalStyles trailer={trailer} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
