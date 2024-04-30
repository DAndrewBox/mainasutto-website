import { useState } from 'react';
import { Loader } from '../../common';
import {
  FeaturesSection,
  Header,
  NewsletterSection,
  TrailerSection,
  GallerySection,
  TeamSection,
  GameMakerSection,
} from '../../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <FeaturesSection />
      <TrailerSection />
      <GallerySection />
      <NewsletterSection />
      <TeamSection />
      <GameMakerSection />
    </>
  );
};

export default Home;
