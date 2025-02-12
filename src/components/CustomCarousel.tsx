import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importar el CSS correcto de Swiper
import 'swiper/css/pagination'; // Importar la paginación de Swiper
import { Button } from './CTA/Button';
import { Pagination } from 'swiper/modules';
import { Cta } from './Jumbotron';

interface Slide { 
  title: string, 
  description: string 
  ctas: {
    text: string,
    link: string,
    variant: 'dark' | 'light';
  } []
}

export interface CustomCarouselProps {
  data: {
    image: string;
    slides: Slide[];
  };
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ data }) => {
  const pagination = {
    clickable: true,
    injectStyles: [`
    `],
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} transition-all duration-300 index-${index}"></span>`; // Personaliza el renderizado de los bullets
    },
  };

  return (
    <div className="w-11/12 md:container mx-auto flex flex-col items-center py-12">
      {/* Content */}
      <div className="flex flex-col md:flex-row w-full justify-center">
        {/* Mitad Izquierda: Imagen fija con máscara */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] max-h-[500px]">
          <img
            src={data.image}
            alt="Tab Image"
            className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
        </div>

        {/* Mitad Derecha: Carrusel */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] max-h-[500px]">
          <Swiper
            direction="vertical"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={pagination} // Aplicamos la paginación personalizada
            modules={[Pagination]} // Necesitamos el módulo de Paginación
            className="w-full h-full vertical md:rounded-r-lg md:rounded-none rounded-b-lg"
          >
            {data.slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-60"></div>
                <div className="flex flex-col gap-1 h-full justify-center ml-12 p-2 md:p-5 relative text-white z-10">
                  <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
                  <p className="text-xl mt-4 mb-8">{slide.description}</p>
                  <div className='flex felx-row gap-2'>
                    {slide.ctas.map((cta: Cta, index: number) => (
                      <Button key={index} variant={cta.variant} href={cta.link}>{cta.text}</Button> 
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Claim */}
      <div className='md:w-8/12 mx-auto mt-20'>
            <h3 className='text-2xl font-bold text-center'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis mauris. Nulla sagittis imperdiet.”
            </h3>
      </div>
    </div>
  );
};

export default CustomCarousel;
