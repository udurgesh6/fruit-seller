import "@/styles/globals.css";
import DefaultLayout from "../layouts/default";
import { UserProvider } from "@/context/UserContext";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastContainer />
      <CartProvider>
        <DefaultLayout>
          <Head>
            <title>Quint Essentials</title>
            <link rel="icon" href="/logo.png" sizes="any" />
          </Head>
          <Component {...pageProps} />
        </DefaultLayout>
      </CartProvider>
    </UserProvider>
  );
}
