import { Section } from '@common';
import { PlatformsSection } from '../PlatformsSection';
import { YoutubeTrailerContainer } from './TrailerSection.styles';

export const TrailerSection = () => {
  return (
    <Section $isOverlay title={'- Trailer -'}>
      <YoutubeTrailerContainer>
        <iframe
          src="https://www.youtube.com/embed/dJ1ga67zW-0?controls=0&amp;rel=0"
          title="Mainasutto Trailer"
          allowFullScreen
        ></iframe>
      </YoutubeTrailerContainer>
      <PlatformsSection />
    </Section>
  );
};
