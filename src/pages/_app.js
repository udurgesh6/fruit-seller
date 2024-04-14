import "@/styles/globals.css";
import DefaultLayout from "../layouts/default";
import { UserProvider } from "@/context/UserContext";
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </CartProvider>
    </UserProvider>
  );
}
