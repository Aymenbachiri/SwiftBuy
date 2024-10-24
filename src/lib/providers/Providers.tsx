import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "./ThemeProvider";
import LenisScrollProvider from "./LenisScrollProvider";
import NextTopLoader from "nextjs-toploader";
import ReduxProvider from "./ReduxProvider";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <ReduxProvider>
          <LenisScrollProvider />
          <NextTopLoader />
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </ReduxProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
