import CarouselMain from "@/components/global/CarouselMain";
import HeroSection from "@/components/global/HeroSection";
import IntroMain from "@/components/global/IntroMain";

export default function Home() {
  return (
    <div className="w-screen h-screen md:h-extra">
      <main className="w-full h-full pt-12 flex flex-col">
        <HeroSection />
        <IntroMain />
        <CarouselMain />
      </main>
      <footer></footer>
    </div>
  );
}
