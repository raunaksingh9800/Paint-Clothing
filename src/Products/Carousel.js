import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useEffect, useState } from 'react';

const images = ["/imgaes/1.jpg","/imgaes/2.jpg","/imgaes/3.jpg"]

function CarouselSet(props) {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
        <div >
            <Image radius="md"
                h={props.h}
                src={url}
                 /> 
        </div>

    </Carousel.Slide>
  ));

  return <Carousel loop  slideGap="md" height={props.h}> {slides}</Carousel>;
}
export default CarouselSet;