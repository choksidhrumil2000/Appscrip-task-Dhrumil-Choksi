import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}
