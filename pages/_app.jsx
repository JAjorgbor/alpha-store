import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <div className={`${inter.className}`}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </NextUIProvider>
    </>
  );
}
