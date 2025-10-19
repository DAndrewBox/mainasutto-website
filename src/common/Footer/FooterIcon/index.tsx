import { FooterIconLink } from './FooterIcon.styles';

interface FooterIconProps {
  Component: React.ComponentType<{ color: string; size: string | number }>;
  href: string;
  alt: string;
}

export const FooterIcon = ({ Component, href, alt }: FooterIconProps) => {
  return (
    <FooterIconLink href={href} target="_blank" rel="noreferrer" aria-label={alt}>
      <Component color="#FFF" size="2rem" />
    </FooterIconLink>
  );
};

export default FooterIcon;
