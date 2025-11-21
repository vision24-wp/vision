import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home({ onGetStarted }) {
  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <Footer />
    </>
  );
}

