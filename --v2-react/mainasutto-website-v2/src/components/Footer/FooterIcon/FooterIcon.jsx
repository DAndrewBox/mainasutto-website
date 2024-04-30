import { FooterIconLink } from "./FooterIcon.styles";

export const FooterIcon = ({ Component, href, alt }) => {
  return (
    <FooterIconLink href={href} target="_blank" rel="noreferrer" aria-label={alt}>
      <Component color="#FFF" size="2rem" />
    </FooterIconLink>
  );
}
