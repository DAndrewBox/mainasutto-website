import { useEffect, useState } from 'react';
import { Loader, Footer } from '@common';
import { FeaturesSection, Header, NewsletterSection, TrailerSection, GallerySection, TeamSection, GameMakerSection } from '../../modules';
import { CommonPage } from '../Pages.styles';
import i18n, { validateLanguage } from '../../public/i18n';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const language = urlParams.get('lang') || i18n.language;
    i18n.changeLanguage(validateLanguage(language));
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <CommonPage>
      <Loader isLoading={isLoading} />
      <Header />
      <FeaturesSection />
      <TrailerSection />
      <GallerySection />
      <NewsletterSection />
      <TeamSection />
      <GameMakerSection />
      <Footer />
    </CommonPage>
  );
};
