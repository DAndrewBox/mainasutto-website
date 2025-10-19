import Footer from '@common/Footer';
import Loader from '@common/Loader';
import { useEffect, useState } from 'react';
import { FeaturesSection, GallerySection, GameMakerSection, Header, NewsletterSection, TeamSection, TrailerSection } from '../../modules';
import i18n, { validateLanguage } from '../../public/i18n';
import { CommonPage } from '../Pages.styles';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const language = urlParams.get('lang') || i18n.language;
    i18n.changeLanguage(validateLanguage(language));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

export default Home;
