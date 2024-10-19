import CartPage from "@/page/CartPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | SwiftBuy - Review Your Items Before Checkout",
  description:
    "View and manage the items in your SwiftBuy cart. Check quantities, prices, and discounts before proceeding to secure checkout. Enjoy a seamless shopping experience with fast shipping and exclusive deals on electronics, fashion, and more.",
  openGraph: {
    title: "Your Cart | SwiftBuy - Review Your Items Before Checkout",
    description:
      "View and manage the items in your SwiftBuy cart. Check quantities, prices, and discounts before proceeding to secure checkout. Enjoy a seamless shopping experience with fast shipping and exclusive deals on electronics, fashion, and more.",
    type: "website",
    url: "https://swiftbuy.vercel.app/cart",
    images: [
      {
        url: "https://img.freepik.com/free-photo/shopping-cart-with-red-plastic-bag-it_1340-37199.jpg?t=st=1729354818~exp=1729358418~hmac=d21915acf989af32cef3b1430107efc9227ba936ae2b6fd768250fde98de4536&w=740",
        width: 1200,
        height: 630,
        alt: "SwiftBuy cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Cart | SwiftBuy - Review Your Items Before Checkout",
    description:
      "View and manage the items in your SwiftBuy cart. Check quantities, prices, and discounts before proceeding to secure checkout. Enjoy a seamless shopping experience with fast shipping and exclusive deals on electronics, fashion, and more.",
    images: [
      {
        url: "https://img.freepik.com/free-photo/shopping-cart-with-red-plastic-bag-it_1340-37199.jpg?t=st=1729354818~exp=1729358418~hmac=d21915acf989af32cef3b1430107efc9227ba936ae2b6fd768250fde98de4536&w=740",
        width: 1200,
        height: 630,
        alt: "SwiftBuy cart",
      },
    ],
  },
};

export default function page() {
  return <CartPage />;
}
