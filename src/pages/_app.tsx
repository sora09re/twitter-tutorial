import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "src/components/Layout";
import LoginModal from "@/src/components/Modals/LoginModal";
import RegisterModal from "@/src/components/Modals/RegisterModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
