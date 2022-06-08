import {
  ChakraProvider,
  ComponentStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import Color from "color";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

const tabTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "3xl",
    backgroundColor: "white",
    border: "1px",
    borderColor: "gray.300",
  },
};

const theme = extendTheme({
  colors: { link: Color.rgb(299, 104, 36).hex() },
  components: { Tab: tabTheme },
  styles: {
    global: { body: { fontSize: "12px", color: "gray.600" } },
  },
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
