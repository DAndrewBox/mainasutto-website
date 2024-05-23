import { useState } from 'react';
import { GalleryContainer, GalleryImage, GalleryImageMainContainer } from './GallerySection.styles';
import { images } from './utils';
import { Slide } from 'react-slideshow-image';

export const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleSlide = (from, to) => {
    setActiveImage(to);
  };

  return (
    <GalleryContainer>
      <GalleryImageMainContainer>
        <Slide
          defaultIndex={activeImage}
          autoplay
          infinite
          duration={5000}
          transitionDuration={300}
          onChange={handleSlide}
          vertical={false}
          arrows={false}
          indicators={true}
        >
          {images.map((image, index) => (
            <GalleryImage
              src={image.src}
              key={`gallery-img-${index}`}
              loading='lazy'
              className={activeImage === index ? 'active-image' : ''}
            />
          ))}
        </Slide>
      </GalleryImageMainContainer>
    </GalleryContainer>
  );
};
