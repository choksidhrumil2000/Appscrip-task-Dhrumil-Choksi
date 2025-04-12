import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
