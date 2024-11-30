import Hero from "./pages/home/Hero";
import BagsCollection from "./pages/home/BagsCollection";
import Team from "./pages/home/Team";
import NewArrival from "./pages/home/NewArrival";
import ServiceSection from "./pages/home/ServiceSection";
import CountersSection from "./pages/home/CountersSection";
import TrendingProducts from "./pages/home/TrendingProducts";
import NewsLetterUpdate from "./pages/home/NewsLetterUpdate";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <BagsCollection />
        <NewArrival />
        <ServiceSection />
        <Team />
        <CountersSection />
        <TrendingProducts />
        <NewsLetterUpdate />
      </div>
    </>
  );
}
