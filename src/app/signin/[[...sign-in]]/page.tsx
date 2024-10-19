import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | SwiftBuy - Access Your Account",
  description:
    "Sign in to your SwiftBuy account to track orders, view purchase history, and enjoy personalized recommendations. Secure login for a seamless shopping experience on the best online deals.",
  openGraph: {
    title: "Sign In | SwiftBuy - Access Your Account",
    description:
      "Sign in to your SwiftBuy account to track orders, view purchase history, and enjoy personalized recommendations. Secure login for a seamless shopping experience on the best online deals.",
    type: "website",
    url: "https://swiftbuy.vercel.app/about",
    images: [
      {
        url: "https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?t=st=1729352473~exp=1729356073~hmac=927402c320e326b0f6f6ba6e9cae29ff32d3f2071c0999eb47749f71eb953dd4&w=740",
        width: 1200,
        height: 630,
        alt: "signin to SwiftBuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In | SwiftBuy - Access Your Account",
    description:
      "Sign in to your SwiftBuy account to track orders, view purchase history, and enjoy personalized recommendations. Secure login for a seamless shopping experience on the best online deals.",
    images: [
      {
        url: "https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?t=st=1729352473~exp=1729356073~hmac=927402c320e326b0f6f6ba6e9cae29ff32d3f2071c0999eb47749f71eb953dd4&w=740",
        width: 1200,
        height: 630,
        alt: "signin to SwiftBuy",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12 text-center">
      <SignIn />
    </main>
  );
}
