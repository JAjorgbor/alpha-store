import Providers from "@/components/Providers";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PortalHeader from "@/components/layout/PortalHeader";
import PortalSidebar from "@/components/layout/PortalSidebar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const authRoutes = ["/login", "/register"];
  const router = useRouter();
  return (
    <>
      <NextUIProvider>
        {router.pathname.startsWith("/portal") ? (
          <>
            <Providers>
              <div className="flex gap-5">
                <PortalSidebar />
                <div className="min-h-screen max-w-full">
                  <PortalHeader />
                  <Component {...pageProps} />
                </div>
              </div>
            </Providers>
          </>
        ) : (
          <>
            <div className={`${inter.className}`}>
              {!authRoutes.includes(router.pathname) && <Header />}

              <Component {...pageProps} />
              {!authRoutes.includes(router.pathname) && <Footer />}
            </div>
          </>
        )}
      </NextUIProvider>
    </>
  );
}
