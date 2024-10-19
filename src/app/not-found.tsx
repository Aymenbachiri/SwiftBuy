import MyImage from "@/components/reusableComponents/MyImage";
import notFoundImg from "/public/assets/images/404_page-not-found.webp";
import Link from "next/link";

export default function Notfound() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-black">
      <div className="container flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
        <section className="mx-8 w-full lg:w-1/2">
          <h1 className="text-1xl font-dark mb-8 text-center font-extrabold text-blue-500 md:text-start">
            404
          </h1>
          <p className="mb-8 text-2xl font-light leading-normal dark:text-slate-300 md:text-3xl">
            Sorry we couldn&apos;t find the page you&apos;re looking for
          </p>
          <Link
            href="/"
            className="duration-400 mx-auto inline rounded-lg border border-transparent bg-blue-600 px-5 py-3 text-center text-sm font-medium leading-5 text-white shadow-2xl transition-all hover:bg-red-700 focus:outline-none active:bg-red-600 md:text-start"
          >
            back to homepage
          </Link>
        </section>
        <section className="mx-5 my-12 w-full rounded-md lg:flex lg:w-1/2 lg:justify-end">
          <MyImage
            src={notFoundImg}
            alt="Page not found"
            width={540}
            height={260}
            sizes="(min-width: 1120px) 480px, (min-width: 780px) 43.13vw, calc(100vw - 96px)"
            placeholder="blur"
            style={{ borderRadius: "1rem" }}
          />
        </section>
      </div>
    </main>
  );
}