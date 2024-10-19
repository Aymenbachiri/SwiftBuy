import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/lib/providers/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SwiftBuy | Shop the Best Deals Online - Electronics, Fashion & More",
  description:
    "Discover unbeatable prices and exclusive deals on SwiftBuy, your one-stop online shop for electronics, fashion, home essentials, and more. Fast shipping, secure checkout, and 24/7 customer support for a seamless shopping experience. Shop now!",
  openGraph: {
    title:
      "SwiftBuy | Shop the Best Deals Online - Electronics, Fashion & More",
    description:
      "Discover unbeatable prices and exclusive deals on SwiftBuy, your one-stop online shop for electronics, fashion, home essentials, and more. Fast shipping, secure checkout, and 24/7 customer support for a seamless shopping experience. Shop now!",
    type: "website",
    url: "https://swiftbuy.vercel.app/about",
    images: [
      {
        url: "https://img.freepik.com/free-vector/shop-with-sign-open-theme_23-2148546186.jpg?t=st=1729352905~exp=1729356505~hmac=bdb9fe89f420cb758a1824e3ec87676176da3691fdbe1b4bd43ebcb46cbbf335&w=740",
        width: 1200,
        height: 630,
        alt: "SwiftBuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SwiftBuy | Shop the Best Deals Online - Electronics, Fashion & More",
    description:
      "Discover unbeatable prices and exclusive deals on SwiftBuy, your one-stop online shop for electronics, fashion, home essentials, and more. Fast shipping, secure checkout, and 24/7 customer support for a seamless shopping experience. Shop now!",
    images: [
      {
        url: "https://img.freepik.com/free-vector/shop-with-sign-open-theme_23-2148546186.jpg?t=st=1729352905~exp=1729356505~hmac=bdb9fe89f420cb758a1824e3ec87676176da3691fdbe1b4bd43ebcb46cbbf335&w=740",
        width: 1200,
        height: 630,
        alt: "SwiftBuy",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
