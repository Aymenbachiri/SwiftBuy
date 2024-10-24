import ProductsPage from "@/page/ProductsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Products | SwiftBuy - Discover the Latest Deals on Electronics, Fashion, and More",
  description:
    "Explore a wide range of products on SwiftBuy. From electronics and fashion to home goods, find unbeatable deals, exclusive discounts, and fast shipping. Shop now and enjoy a seamless online shopping experience.",
  openGraph: {
    title:
      "Products | SwiftBuy - Discover the Latest Deals on Electronics, Fashion, and More",
    description:
      "Explore a wide range of products on SwiftBuy. From electronics and fashion to home goods, find unbeatable deals, exclusive discounts, and fast shipping. Shop now and enjoy a seamless online shopping experience.",
    type: "website",
    url: "https://swiftbuy.vercel.app/products",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "SwiftBuy products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Products | SwiftBuy - Discover the Latest Deals on Electronics, Fashion, and More",
    description:
      "Explore a wide range of products on SwiftBuy. From electronics and fashion to home goods, find unbeatable deals, exclusive discounts, and fast shipping. Shop now and enjoy a seamless online shopping experience.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "SwiftBuy products",
      },
    ],
  },
};

export default function page() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 md:mt-24 lg:max-w-2xl">
        <h2 className="mb-6 mt-10 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <span className="relative sm:mt-20 md:mt-0">Our Latest Products</span>
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
          Explore our range of high-quality products, each carefully selected to
          meet your needs.
        </p>
      </section>
      <ProductsPage />
    </main>
  );
}
