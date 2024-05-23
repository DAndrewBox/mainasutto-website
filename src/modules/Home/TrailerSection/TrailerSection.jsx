import { Section } from '@common';
import { PlatformsSection } from '../PlatformsSection';
import { YoutubeTrailerContainer } from './TrailerSection.styles';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export const TrailerSection = () => {
  return (
    <Section $isOverlay title={'- Trailer -'}>
      <YoutubeTrailerContainer>
        <LiteYouTubeEmbed id="dJ1ga67zW-0" title="Mainasutto Trailer" className="iframe" poster="hqdefault" />
      </YoutubeTrailerContainer>
      <PlatformsSection />
    </Section>
  );
};
