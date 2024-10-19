import MyImage from "../reusableComponents/MyImage";
import MyLink from "../reusableComponents/MyLink";
import Img from "/public/assets/images/empty_cart.webp";

export default function EmptyCart() {
  return (
    <main className="my-[110px] flex-col items-center justify-center md:flex md:flex-row">
      <section className="flex justify-center rounded-md px-2 dark:bg-white">
        <MyImage
          src={Img}
          loading="lazy"
          alt="empty cart"
          className="rounded-full"
          placeholder="blur"
          width={300}
          height={300}
          sizes="(min-width: 1080px) 512px, (min-width: 920px) calc(77.14vw - 306px), (min-width: 780px) calc(75vw - 291px), (min-width: 560px) 512px, 95vw"
        />
      </section>
      <aside className="flex max-w-[500px] flex-col items-center gap-4 rounded-md p-4 py-8 shadow-lg">
        <h1 className="text-xl font-bold uppercase">Your Cart feels lonely</h1>
        <p className="-mt-2 px-10 text-center text-sm">
          Your Shopping cart lives to serve. Give it purpose - fill it with
          books, electronics, videos, etc. and make it happy.
        </p>
        <MyLink
          href="/products"
          className="cursor-pointer rounded-md px-8 py-2 text-lg font-semibold duration-300 hover:bg-black hover:text-white active:bg-gray-900 dark:hover:bg-gray-900"
        >
          Continue Shopping
        </MyLink>
      </aside>
    </main>
  );
}
