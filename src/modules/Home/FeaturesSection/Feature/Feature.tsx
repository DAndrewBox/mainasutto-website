import { useEffect } from 'react';
import { FeatureContainer, FeatureDescription, FeatureImage, FeatureTitle } from './Feature.styles';

interface FeatureProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  src: string;
  inverted?: boolean;
}

export const Feature = ({ title, description, src, inverted }: FeatureProps) => {
  const isMobile = window.innerWidth <= 1024;

  // Add class 'appear' to the FeatureContainer when it's in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll('.FeatureContainer');
      features.forEach((feature) => {
        const featureTop = feature.getBoundingClientRect().top;
        if (featureTop < window.innerHeight / 1.25) {
          feature.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (inverted && !isMobile) {
    return (
      <FeatureContainer style={{ gridTemplateColumns: '55fr 45fr' }} className="inverted FeatureContainer">
        <span>
          <FeatureTitle className={'inverted'}>{title}</FeatureTitle>
          <FeatureDescription className={'inverted'}>{description}</FeatureDescription>
        </span>
        <FeatureImage src={src} loading="lazy" alt={title} />
      </FeatureContainer>
    );
  }

  return (
    <FeatureContainer className="FeatureContainer">
      <FeatureImage src={src} loading="lazy" alt={title} />
      <span>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </span>
    </FeatureContainer>
  );
};

export default Feature;
