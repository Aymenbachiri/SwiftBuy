import Faq from "@/components/home/faq/Faq";
import Features from "@/components/home/Features";
import HomeBody from "@/components/home/HomeBody";
import Location from "@/components/home/Location";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <HomeBody />
      <Features />
      <Testimonials />
      <Location />
      <Faq />
    </>
  );
}
