import Header from "@/components/hoc/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <Toaster
        toastOptions={{
          error: {
            style: { border: "1px solid #713200", padding: "16px" },
          },
        }}
      />
      <Component {...pageProps} />
    </Header>
  );
}
