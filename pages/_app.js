import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;

// https://www.sanity.io/docs/customization