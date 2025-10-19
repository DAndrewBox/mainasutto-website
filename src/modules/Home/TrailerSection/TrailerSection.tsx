import Section from '@common/Section';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import PlatformsSection from '../PlatformsSection/PlatformsSection';
import { YoutubeTrailerContainer } from './TrailerSection.styles';

export const TrailerSection = () => {
  return (
    <Section $isOverlay title={'- Trailer -'}>
      <YoutubeTrailerContainer>
        <LiteYouTubeEmbed id="dJ1ga67zW-0" title="Mainasutto Trailer" iframeClass="iframe" poster="maxresdefault" />
      </YoutubeTrailerContainer>
      <PlatformsSection />
    </Section>
  );
};

export default TrailerSection;
