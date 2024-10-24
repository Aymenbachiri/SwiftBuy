import ProductCard from "@/app/products/_components/ProductCard";
import {
  getProducts,
  type ProductsType,
} from "@/app/products/_lib/helpers/getProducts";
import AppearAnimation from "@/lib/animation/AppearAnimation";
import { MySuspense } from "@/lib/utils/MySuspense";

export default async function ProductsPage() {
  const products: ProductsType[] = await getProducts();

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 md:mt-24 lg:max-w-2xl">
        <h2 className="mb-6 mt-10 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <AppearAnimation from="top">
            <span className="relative sm:mt-20 md:mt-0">
              Our Latest Products
            </span>
          </AppearAnimation>
        </h2>
        <AppearAnimation delay={0.2} from="bottom">
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Explore our range of high-quality products, each carefully selected
            to meet your needs.
          </p>
        </AppearAnimation>
      </section>
      <MySuspense>
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </section>
        </div>
      </MySuspense>
    </main>
  );
}
