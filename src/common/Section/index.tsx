import { SectionContainer, SectionSubtitle, SectionTitle } from './Section.styles';

interface SectionProps {
  title?: string | React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  $isOverlay?: boolean;
  $backgroundImage?: string;
}

export const Section = ({ title, subtitle, children, $isOverlay, $backgroundImage }: SectionProps) => {
  return (
    <SectionContainer $isOverlay={$isOverlay} $backgroundImage={$backgroundImage}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
      {children}
    </SectionContainer>
  );
};

export default Section;
