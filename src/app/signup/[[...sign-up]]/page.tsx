import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | SwiftBuy - Create Your Account for Exclusive Offers",
  description:
    "Join SwiftBuy today and unlock exclusive deals, fast checkout, and personalized shopping experiences. Sign up now to start shopping the best in electronics, fashion, and more!",
  openGraph: {
    title: "Sign Up | SwiftBuy - Create Your Account for Exclusive Offers",
    description:
      "Join SwiftBuy today and unlock exclusive deals, fast checkout, and personalized shopping experiences. Sign up now to start shopping the best in electronics, fashion, and more!",
    type: "website",
    url: "https://swiftbuy.vercel.app/about",
    images: [
      {
        url: "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1729352747~exp=1729356347~hmac=ebabc65388e69a0257e6b1d1743c0e65a4a37c6bbf564bc454498e04ee810071&w=740",
        width: 1200,
        height: 630,
        alt: "signup to SwiftBuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up | SwiftBuy - Create Your Account for Exclusive Offers",
    description:
      "Join SwiftBuy today and unlock exclusive deals, fast checkout, and personalized shopping experiences. Sign up now to start shopping the best in electronics, fashion, and more!",
    images: [
      {
        url: "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1729352747~exp=1729356347~hmac=ebabc65388e69a0257e6b1d1743c0e65a4a37c6bbf564bc454498e04ee810071&w=740",
        width: 1200,
        height: 630,
        alt: "signup to SwiftBuy",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12 text-center">
      <SignUp />
    </main>
  );
}
