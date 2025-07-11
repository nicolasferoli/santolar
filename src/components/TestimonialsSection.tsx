import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TestimonialsSection: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const testimonialImages = [
    {
      src: "/lovable-uploads/c2d86167-0ac1-4471-b145-addcce9478cd.png",
      alt: "Depoimento da cliente Marina"
    },
    {
      src: "/lovable-uploads/0eaa2df4-d7c1-4430-8caa-28aa63f79f7f.png", 
      alt: "Depoimento da cliente Vivian"
    },
    {
      src: "/lovable-uploads/7ca952a6-0fe8-48c9-bdd4-05cd57744d73.png",
      alt: "Depoimento da cliente Amanda"
    }
  ];

  return (
    <section className="w-full max-w-[1200px] mt-[131px] max-md:mt-10 mx-auto text-center">
      <div className="mb-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
          <h2 className="text-black text-5xl font-extrabold leading-[1.1] max-md:text-[40px]">
            O que nossas mães dizem:
          </h2>
          <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
        </div>
        
        <div className="relative w-full">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialImages.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-[20px] border border-green-200 shadow-lg overflow-hidden">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      className="w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};