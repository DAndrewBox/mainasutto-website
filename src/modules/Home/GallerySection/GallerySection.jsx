import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { GalleryContainer, GalleryImage, GalleryImageMainContainer } from './GallerySection.styles';
import { images } from './utils';

export const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleSlide = (_from, to) => {
    setActiveImage(to);
  };

  return (
    <GalleryContainer>
      <GalleryImageMainContainer>
        <Slide defaultIndex={activeImage} autoplay infinite duration={5000} transitionDuration={300} onChange={handleSlide} vertical={false} arrows={false} indicators={true}>
          {images.map((image, index) => (
            <GalleryImage src={image.src} key={image.id} loading="lazy" className={activeImage === index ? 'active-image' : ''} />
          ))}
        </Slide>
      </GalleryImageMainContainer>
    </GalleryContainer>
  );
};
