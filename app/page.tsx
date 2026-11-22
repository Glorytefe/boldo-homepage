import { Blog } from '@/components/Blog/Blog';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { Faq } from '@/components/Faq/Faq';
import { Features } from '@/components/Features/Features';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/components/Hero/Hero';
import { Navbar } from '@/components/Navbar/Navbar';
import { Services } from '@/components/Services/Services';
import { Testimonials } from '@/components/Testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <Faq />
        <Blog />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
