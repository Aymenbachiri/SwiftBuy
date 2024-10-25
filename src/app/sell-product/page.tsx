import SellProductPage from "@/page/SellProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Product | SwiftBuy - Reach Thousands of Buyers",
  description:
    "List your products on SwiftBuy and reach a large audience. Easily set prices, add descriptions, and showcase images to attract buyers. Join our platform to sell electronics, fashion, home goods, and more with secure payments and quick setup.",
  openGraph: {
    title: "Sell Your Product | SwiftBuy - Reach Thousands of Buyers",
    description:
      "List your products on SwiftBuy and reach a large audience. Easily set prices, add descriptions, and showcase images to attract buyers. Join our platform to sell electronics, fashion, home goods, and more with secure payments and quick setup.",
    type: "website",
    url: "https://swiftbuy.vercel.app/sell-product",
    images: [
      {
        url: "https://img.freepik.com/free-vector/seller-concept-professional-worker-supermarket-shop-store-stocktacking-merchandising-cash-accounting-calculations-client-service-payment-operation-vector-illustration_613284-3114.jpg?t=st=1729842430~exp=1729846030~hmac=adb91c313ca00b5cf6cbdc86a677201db119151add004d38ecc2c892d2ad0388&w=996",
        width: 1200,
        height: 630,
        alt: "Showcase your product on SwiftBuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Your Product | SwiftBuy - Reach Thousands of Buyers",
    description:
      "List your products on SwiftBuy and reach a large audience. Easily set prices, add descriptions, and showcase images to attract buyers. Join our platform to sell electronics, fashion, home goods, and more with secure payments and quick setup.",
    images: [
      {
        url: "https://img.freepik.com/free-vector/seller-concept-professional-worker-supermarket-shop-store-stocktacking-merchandising-cash-accounting-calculations-client-service-payment-operation-vector-illustration_613284-3114.jpg?t=st=1729842430~exp=1729846030~hmac=adb91c313ca00b5cf6cbdc86a677201db119151add004d38ecc2c892d2ad0388&w=996",
        width: 1200,
        height: 630,
        alt: "Showcase your product on SwiftBuy",
      },
    ],
  },
};

export default function page() {
  return <SellProductPage />}
