'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Testimonial {
  description: string;
  name: string;
  title: string;
  image: string;
}

interface TestimonialCardProps extends Testimonial {
  isMiddle?: boolean;
}

const testimonials: Testimonial[] = [
  {
    description:
      '"As a small business owner, I used to spend hours juggling finances, tracking projects, and managing customer inquiries. KaziDesk brings it all into one platform, saving me time every week and letting me focus on growing my craft business—it’s simple to use and a total game-changer!"',
    name: 'Muthoni',
    title: 'Nairobi Crafts',
    image: '/Avatar/muthoni.png',
  },
  {
    description:
      '"Before KaziDesk, our team struggled with scattered communication—emails here, WhatsApp there, and missed updates everywhere. Now, with its integrated tools, we’re all on the same page, collaborating smoothly, and getting things done faster than ever."',
    name: 'Otieno',
    title: 'Kenya Tech Solutions',
    image: '/Avatar/otieno.png',
  },
  {
    description:
      '"Handling payroll and compliance used to be a nightmare—calculating PAYE, filing NHIF, and keeping up with labor laws took way too much time. KaziDesk automates it all, cutting my workload in half and giving me peace of mind that everything’s done right."',
    name: 'Sarah',
    title: 'East Africa Logistics',
    image: '/Avatar/sarah.png',
  },
  {
    description:
      '"Delivering projects on time was always a challenge with our old system—tasks slipped through the cracks, and deadlines crept up. KaziDesk keeps everything organized, from timelines to team assignments, and we’ve seen a 30% improvement in on-time delivery."',
    name: 'Peter',
    title: 'Rift Valley Construction',
    image: '/Avatar/peter.png',
  },
];

// Circular array for infinite loop
const circularTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(4);
  const [slideWidth, setSlideWidth] = useState<number>(0);

  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCarouselDimensions = () => {
      const width = window.innerWidth;
      let cardsToShow = 4;
      let cardWidth = 300;
      let gapSize = 20;

      if (width < 640) {
        cardsToShow = 1;
        cardWidth = Math.min(300, width - 40);
        gapSize = 16;
      } else if (width < 768) {
        cardsToShow = 1;
        cardWidth = Math.min(320, width - 40);
        gapSize = 16;
      } else if (width < 1024) {
        cardsToShow = 2;
        cardWidth = Math.min(320, (width - 60 - gapSize) / 2);
        gapSize = 20;
      } else if (width < 1280) {
        cardsToShow = 3;
        cardWidth = Math.min(320, (width - 80 - gapSize * 2) / 3);
        gapSize = 20;
      } else {
        cardsToShow = 3;
        cardWidth = Math.min(320, (width - 100 - gapSize * 3) / 4);
        gapSize = 20;
      }

      setCardsPerView(cardsToShow);
      setSlideWidth(cardWidth + gapSize);

      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll<HTMLElement>('.testimonial-card');
        cards.forEach((card) => {
          card.style.width = `${cardWidth}px`;
          card.style.marginRight = `${gapSize}px`;
        });
      }
    };

    updateCarouselDimensions();
    window.addEventListener('resize', updateCarouselDimensions);
    return () => window.removeEventListener('resize', updateCarouselDimensions);
  }, []);

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % circularTestimonials.length);
    }, 5000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [circularTestimonials.length]);

  const goToSlide = (index: number) => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    const targetIndex = testimonials.length + index;
    setCurrentSlide(targetIndex);
    autoScrollRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % circularTestimonials.length);
    }, 5000);
  };

  const displayedSlide = currentSlide % testimonials.length;

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      {/* Heading */}
      <h1 className="text-red_republic md:pt-[16px] pb-10 sm:pb-16 md:pb-20 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-inter text-center">
        <span className=" text-rose-700">
          We let Our <span className="text-[#131111]">Clients Success</span>
        </span>
        <br />
        <span className=" text-rose-700">Speak for us</span>
      </h1>

      {/* Carousel */}
      <div className="w-full px-4 relative mb-6">
        <div
          className="overflow-hidden mx-auto max-w-full"
          style={{ width: slideWidth * cardsPerView }}
        >
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
          >
            {circularTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card flex-shrink-0">
                <TestimonialCard
                  {...testimonial}
                  isMiddle={index === currentSlide + Math.floor((cardsPerView - 1) / 2)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                displayedSlide === index ? 'w-8 bg-[#4F1919]' : 'w-2 bg-gray-300'
              }`}  

              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  name,
  title,
  image,
  isMiddle = false,
}) => {
  return (   

    <div
      className={`${
        isMiddle ? 'bg-[#4F1919] text-white' : 'bg-white text-[#4F1919]'
      } flex flex-col justify-between rounded-3xl shadow-md h-[420px] py-10 px-6 transition-all duration-500`}
    >
      <p className="font-inter text-base sm:text-lg leading-relaxed">{description}</p>
      <div className="flex items-center gap-4 mt-3 mb-10">
        <Image
          src={image}
          alt={`${name}'s profile`}
          width={48}
          height={48}
          className={`rounded-full border-2 ${
            isMiddle ? 'border-white' : 'border-[#B3443D]'
          } object-cover`}
        />
        <div>
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
