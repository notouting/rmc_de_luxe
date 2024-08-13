import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselHero({ children, src, position, brightness }: { children?: React.ReactNode, src: string, position: string, brightness?: string }) {
    return (
        <Carousel className="w-full h-full relative">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="p-1 h-full">
                            <Card className="h-full">
                                <CardContent className="flex w-full h-full items-center justify-center">
                                    <Image className={`w-full max-h-[84vh] object-cover object-center ${brightness}`} src={src} alt="hero" width={1432} height={976} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute top-[43%] left-[12%]">
                {children}
            </div>
            <div className={`absolute flex gap-2 ${position}`}>
                <CarouselPrevious className=" border-2 bg-transparent" />
                <CarouselNext className=" border-2 bg-transparent" />
            </div>
        </Carousel>
    )
}
