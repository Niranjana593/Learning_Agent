import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './component/nav';
import Hero from './component/hero';
import Features from './component/features';
import Workflow from './component/workflow';
import ProfilePreview from './component/profilePreview';
import StrategyPreview from './component/strategyPreview';
import CtaSection from './component/ctaSection';
import HowItWorks from './component/howItWorks';
import About from './component/about';
import Research from './component/research';
import Footer from './component/footer';

// Helper component to scroll to top of page on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Workflow />
      <ProfilePreview />
      <StrategyPreview />
      <CtaSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500 selection:text-white">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
