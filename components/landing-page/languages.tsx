"use client"
import Autoplay from "embla-carousel-autoplay"

import {
  DE,
  ES,
  FR,
  GB,
  GR,
  IN,
  IT,
  SE,
  US,
} from "country-flag-icons/react/3x2"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import React from "react"

const flags = [
  <US key={0} />,
  <IT key={1} />,
  <DE key={2} />,
  <GB key={3} />,
  <FR key={4} />,
  <SE key={5} />,
  <ES key={6} />,
  <IN key={7} />,
  <GR key={8} />,
]

const Flags = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="w-full flex justify-center items-center mb-16 z-20">
      <Carousel
        opts={{ loop: true, align: "center" }}
        plugins={[plugin.current]}
        className="w-full xl:max-w-xl max-w-[75vw] md:max-w-[50vw]"
      >
        <CarouselContent>
          {flags.map((flag, index) => (
            <CarouselItem
              className="basis-1/4 md:basis-1/6 lg:basis-1/6 justify-center items-center"
              key={index}
            >
              <div className="rounded-lg overflow-hidden">{flag}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Flags
