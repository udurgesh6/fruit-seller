import "@/styles/globals.css";
import DefaultLayout from "../layouts/default";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
