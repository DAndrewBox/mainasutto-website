import { useEffect, useState } from 'react';
import { Section } from '../../common';
import { GalleryButton, GalleryContainer, GalleryImage, GalleryImageMainContainer } from './GallerySection.styles';
import GalleyImage0 from '../../assets/images/gallery/0.png';
import GalleyImage1 from '../../assets/images/gallery/1.png';
import GalleyImage2 from '../../assets/images/gallery/2.png';
import GalleyImage3 from '../../assets/images/gallery/3.png';
import GalleyImage4 from '../../assets/images/gallery/4.png';
import GalleyImage5 from '../../assets/images/gallery/5.png';
import GalleyImage6 from '../../assets/images/gallery/6.png';
import GalleyImage7 from '../../assets/images/gallery/7.png';

export const GallerySection = () => {
  const images = [
    {
      src: GalleyImage0,
      alt: '',
    },
    {
      src: GalleyImage1,
      alt: '',
    },
    {
      src: GalleyImage2,
      alt: '',
    },
    {
      src: GalleyImage3,
      alt: '',
    },
    {
      src: GalleyImage4,
      alt: '',
    },
    {
      src: GalleyImage5,
      alt: '',
    },
    {
      src: GalleyImage6,
      alt: '',
    },
    {
      src: GalleyImage7,
      alt: '',
    },
  ];
  const IMAGES_LENGTH = images.length - 1;

  const [currentImage, setCurrentImage] = useState(0);
  const [lastImage, setLastImage] = useState(IMAGES_LENGTH - 1);
  const [nextImage, setNextImage] = useState(1);
  const [inTransitionPrev, setInTransitionPrev] = useState(false);
  const [inTransitionNext, setInTransitionNext] = useState(false);
  const [useAutoScroll, setUseAutoScroll] = useState(true);

  const onPrevClick = () => {
    setUseAutoScroll(false);
    if (inTransitionNext || inTransitionPrev) return;
    setInTransitionPrev(true);
  };

  const onNextClick = () => {
    setUseAutoScroll(false);
    if (inTransitionNext || inTransitionPrev) return;
    setInTransitionNext(true);
  };

  const onTransitionEnd = () => {
    if (inTransitionPrev) {
      const newCurrentImage = currentImage === 0 ? IMAGES_LENGTH : currentImage - 1;
      setCurrentImage(newCurrentImage);
      setLastImage(newCurrentImage === 0 ? IMAGES_LENGTH : newCurrentImage - 1);
      setNextImage(newCurrentImage === IMAGES_LENGTH ? 0 : newCurrentImage + 1);
      setInTransitionPrev(false);
    }

    if (inTransitionNext) {
      const newCurrentImage = currentImage === IMAGES_LENGTH ? 0 : currentImage + 1;
      setCurrentImage(newCurrentImage);
      setLastImage(newCurrentImage === 0 ? IMAGES_LENGTH : newCurrentImage - 1);
      setNextImage(newCurrentImage === IMAGES_LENGTH ? 0 : newCurrentImage + 1);
      setInTransitionNext(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (inTransitionPrev || inTransitionNext) {
        onTransitionEnd();
      }
    }, 200);
  }, [inTransitionPrev, inTransitionNext]);

  useEffect(() => {
    if (useAutoScroll) {
      const interval = setInterval(() => {
        if (inTransitionPrev || inTransitionNext) return;
        setInTransitionNext(true);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [useAutoScroll]);

  const inTransition = inTransitionPrev || inTransitionNext;

  return (
    <Section isOverlay>
      <GalleryContainer>
        <GalleryImage
          src={images[lastImage].src}
          alt={images[lastImage].alt}
          className={inTransition ? 'inTransition' : ''}
          loading="lazy"
        />
        <GalleryImageMainContainer>
          <GalleryButton onClick={onPrevClick}>{'<'}</GalleryButton>
          <GalleryImage
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className={inTransition ? 'inTransition' : ''}
            loading="lazy"
          />
          <GalleryButton onClick={onNextClick}>{'>'}</GalleryButton>
        </GalleryImageMainContainer>
        <GalleryImage
          src={images[nextImage].src}
          alt={images[nextImage].alt}
          className={inTransition ? 'inTransition' : ''}
          loading="lazy"
        />
      </GalleryContainer>
    </Section>
  );
};
