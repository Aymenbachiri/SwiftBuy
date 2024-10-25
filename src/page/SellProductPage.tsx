import SellProductForm from "@/app/sell-product/_components/SellProductForm";
import AppearAnimation from "@/lib/animation/AppearAnimation";
import { ProtectedRoute } from "@/lib/helpers/ProtectedRoute";

export default function SellProductPage() {
  return (
    <ProtectedRoute>
      <main
        style={{ marginTop: 100 }}
        className="my-20 min-h-screen text-gray-800 dark:text-gray-200"
      >
        <section className="container mx-auto px-4">
          <AppearAnimation from="top">
            <h1 className="mb-4 text-center text-4xl font-bold">
              Sell Your Product
            </h1>
          </AppearAnimation>
          <AppearAnimation delay={0.2} from="bottom">
            <p className="mb-6 text-center text-lg">
              List your products on ShopBase and reach a wider audience. Fill
              out the form below to get started.
            </p>
          </AppearAnimation>
          <AppearAnimation delay={0.4} from="left">
            <SellProductForm />
          </AppearAnimation>
        </section>
      </main>
    </ProtectedRoute>
  );
}
