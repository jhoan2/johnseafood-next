import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';


export default function FoodCarousel() {
  return (
        <Carousel>
            <Carousel.Item interval={3000}>
              <Image 
                    className="w-full max-h-96 object-scale-down bg-slate-200"
                    src={'/images/sesame chicken.jpg'}
                    alt="first slide"
                    width={500}
                    height={500}
                />
                <Carousel.Caption>
                    <h3>Sesame Chicken</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <Image 
                    className="w-full max-h-96 object-scale-down bg-slate-200"
                    src={'/images/shrimp po boy.jpg'}
                    alt="first slide"
                    width={500}
                    height={500}
                />
                <Carousel.Caption>
                    <h3>Shrimp Po-Boy</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <Image 
                    className="w-full max-h-96 object-scale-down bg-slate-200"
                    src={'/images/bbq wings.jpg'}
                    alt="first slide"
                    width={500}
                    height={500}
                />
                <Carousel.Caption>
                    <h3>BBQ Wings</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <Image 
                    className="w-full max-h-96 object-scale-down bg-slate-200"
                    src={'/images/oyster.jpg'}
                    alt="first slide"
                    width={500}
                    height={500}
                />
                <Carousel.Caption>
                    <h3>6 Oysters</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <Image 
                    className="w-full max-h-96 object-scale-down bg-slate-200"
                    src={'/images/2eggrollsandrice.jpg'}
                    alt="first slide"
                    width={500}
                    height={500}
                />
                <Carousel.Caption>
                    <h3>3 Egg Rolls and Rice</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}
