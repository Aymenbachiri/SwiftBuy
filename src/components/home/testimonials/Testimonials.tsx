import AppearAnimation from "@/lib/animation/AppearAnimation";
import MarqueeDemo from "./MarqueeDemo";

export default async function Testimonials() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <AppearAnimation from="top">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
          What Our Customers Say
        </h2>
      </AppearAnimation>
      <AppearAnimation delay={0.2} from="bottom">
        <MarqueeDemo />
      </AppearAnimation>
    </main>
  );
}
