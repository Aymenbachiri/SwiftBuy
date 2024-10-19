import AboutPage from "@/page/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SwiftBuy - Your Trusted Online Shopping Destination",
  description:
    "Learn more about SwiftBuy, the leading ecommerce platform offering top deals on electronics, fashion, and more. Discover our mission, values, and commitment to providing you with the best shopping experience. Join millions of satisfied customers today!",
  openGraph: {
    title: "About Us | SwiftBuy - Your Trusted Online Shopping Destination",
    description:
      "Learn more about SwiftBuy, the leading ecommerce platform offering top deals on electronics, fashion, and more. Discover our mission, values, and commitment to providing you with the best shopping experience. Join millions of satisfied customers today!",
    type: "website",
    url: "https://swiftbuy.vercel.app/about",
    images: [
      {
        url: "https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?t=st=1729352328~exp=1729355928~hmac=4b910b8d27da59cf63a58f6fd6faf0bc3b9362247d6e21da460db05b91df1d6d&w=996",
        width: 1200,
        height: 630,
        alt: "About SwiftBuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | SwiftBuy - Your Trusted Online Shopping Destination",
    description:
      "Learn more about SwiftBuy, the leading ecommerce platform offering top deals on electronics, fashion, and more. Discover our mission, values, and commitment to providing you with the best shopping experience. Join millions of satisfied customers today!",
    images: [
      {
        url: "https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?t=st=1729352328~exp=1729355928~hmac=4b910b8d27da59cf63a58f6fd6faf0bc3b9362247d6e21da460db05b91df1d6d&w=996",
        width: 1200,
        height: 630,
        alt: "About SwiftBuy",
      },
    ],
  },
};

export default function page() {
  return (
    <main className="">
      <AboutPage />
    </main>
  );
}
