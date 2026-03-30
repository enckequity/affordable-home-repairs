import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import CtaBand from "@/components/sections/cta-band";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import ServiceAreas from "@/components/sections/service-areas";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CtaBand />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
