import Section from '@common/Section';
import { useTranslation } from '@src/utils/i18n';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import PlatformsSection from '../PlatformsSection/PlatformsSection';
import { YoutubeTrailerContainer } from './TrailerSection.styles';

export const TrailerSection = () => {
  const { t } = useTranslation();

  return (
    <Section $isOverlay title={t('trailer_title')}>
      <YoutubeTrailerContainer>
        <LiteYouTubeEmbed id="dJ1ga67zW-0" title="Mainasutto Trailer" iframeClass="iframe" poster="maxresdefault" />
      </YoutubeTrailerContainer>
      <PlatformsSection />
    </Section>
  );
};

export default TrailerSection;
