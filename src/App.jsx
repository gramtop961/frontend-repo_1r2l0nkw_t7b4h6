import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StockOverview from './components/StockOverview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* Subtle background texture */}
      <div className="fixed inset-0 pointer-events-none [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      <Navbar />
      <main>
        <Hero />
        <StockOverview />
      </main>
      <Footer />
    </div>
  );
}
