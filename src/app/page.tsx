import CallToAction from "@/components/CallToAction";
import Counters from "@/components/Counters";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import OurWork from "@/components/OurWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Visualize from "@/components/Visualize";
import WhyChooseUs from "@/components/WhyChooseUs";
import { counterItems } from "@/lib/counters";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Process Section */}
      <OurProcess />

      {/* Before & After Section */}
      <section className="relative -mt-8 rounded-t-[2rem] bg-gray-50 sm:-mt-12 sm:rounded-t-[2.75rem] lg:rounded-t-[3.5rem]">
        <Visualize />
      </section>
      
      {/* Our Work Section */}
      <OurWork />

      {/* Counters Section */}
      <Counters items={counterItems} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CallToAction />
    </>
  );
}
