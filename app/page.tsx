"use client";
import Navbar from "../components/Navbar";
import AppFooter from "@/components/Footer";
import Hero from "../components/HeroHomePage";
import Partners from '../components/Partners';
import WhyChooseKaziDesk from "../components/WhyChooseKazidesk";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Partners/>
      <WhyChooseKaziDesk/>
      <Testimonials/>
      <AppFooter/>
    </div>
  );
}

