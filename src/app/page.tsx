import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About"
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";   
export default function Page() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Section />
        <About />
        <Footer />
        <BackToTop />

      </div>
    </>
  );
}
