import MyLink from "@/components/reusableComponents/MyLink";
import type { ProductsType } from "../_lib/helpers/getProducts";
import AppearAnimation from "@/lib/animation/AppearAnimation";

export default function ProductCard({ product }: { product: ProductsType }) {
  const { id, image, title, description, category, price } = product;
  const discount = Math.floor(Math.random() * 11);

  return (
    <main className="relative block rounded-md rounded-tr-3xl border border-gray-600 shadow-xl">
      <AppearAnimation from="top">
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          Save {discount}%
        </span>
      </AppearAnimation>

      <AppearAnimation delay={0.2} from="bottom">
        <img
          src={image as string}
          alt={title}
          className="mx-auto flex h-[20em] w-[20em] items-center justify-center rounded-tr-3xl object-cover"
          loading="lazy"
        />
      </AppearAnimation>
      <div className="p-4 text-center">
        <section className="flex items-center justify-between">
          <AppearAnimation delay={0.4} from="left">
            <h2 className="flex items-center justify-center gap-2 dark:text-gray-500">
              {category}
            </h2>
          </AppearAnimation>
          <AppearAnimation delay={0.6} from="right">
            <h2 className="flex items-center justify-center gap-2 dark:text-gray-500">
              ${price}
            </h2>
          </AppearAnimation>
        </section>
        <AppearAnimation delay={0.8} from="bottom">
          <strong className="text-xl font-medium text-gray-900 dark:text-gray-500">
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </strong>
        </AppearAnimation>
        <AppearAnimation delay={1} from="top">
          <p className="mt-2 text-pretty text-gray-700 dark:text-gray-500">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
        </AppearAnimation>

        <section className="mt-4 flex items-center justify-center gap-2">
          <AppearAnimation delay={1.2} from="left">
            <MyLink
              href={`/products/${id}`}
              className="flex items-center justify-center gap-1 rounded-md border bg-indigo-600 px-2 py-[5px] text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-indigo-700"
            >
              See More
            </MyLink>
          </AppearAnimation>
          <AppearAnimation delay={1.4} from="right">
            <button className="flex items-center justify-center gap-1 rounded-md border bg-indigo-600 px-2 py-[5px] text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-indigo-700">
              Add to Cart
            </button>
          </AppearAnimation>
        </section>
      </div>
    </main>
  );
}
