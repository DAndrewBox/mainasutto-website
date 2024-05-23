import { SectionContainer, SectionSubtitle, SectionTitle } from './Section.styles';

export const Section = ({ title, subtitle, children, $isOverlay, $backgroundImage }) => {
  return (
    <SectionContainer $isOverlay={$isOverlay} $backgroundImage={$backgroundImage}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
      {children}
    </SectionContainer>
  );
};
