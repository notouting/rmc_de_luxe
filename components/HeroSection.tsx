import { CarouselHero } from "@/components/CarouselHero";
import { Jost } from "next/font/google";
import { Button } from "./ui/button";

const jost = Jost({ subsets: ["latin"] })
const HeroSection = () => {
    return (
        <section role="hero" className="w-full h-[80vh]">
            <CarouselHero src="/images/hero-bg.jpg" position="right-[10%] bottom-[10%]" brightness="brightness-50">
                <h2 className={`text-white text-[60px] tracking-normal leading-[55px] ${jost.className}`}>Найдите <br /> идеальное  место <br /> для жизни</h2>
                <p className={`text-white text-[18px] my-3 ${jost.className}`}>Откройте двери в новое будущее с нами</p>
                <Button className="w-[200px] bg-[#E1AF93] py-3 rounded-none">
                    Подробнее
                </Button>
            </CarouselHero>
        </section>
    )
}

export default HeroSection