import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Color from "color";
import type { AppProps } from "next/app";
import Layout from "../components/layout";


const theme = extendTheme({
  colors: { link: Color.rgb(299, 104, 36).hex() },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
