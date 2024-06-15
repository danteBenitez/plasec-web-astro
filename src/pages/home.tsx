import FeatureList from "@/features/landing/feature-list";
import Hero from "@/features/landing/hero";
import PhraseSection from "@/features/landing/phrase";
import Testimonials from "@/features/landing/testimonials";
import DownloadTutorial from "@/features/landing/tutorial/download-tutorial";
import Footer from "@/features/ui/footer";

export default function App() {
  return (
    <main className="h-full">
      <div>
        <Hero />
      </div>
      <FeatureList />
      <PhraseSection />
      <Testimonials />
      <DownloadTutorial />
      <Footer />
    </main>
  );
}
