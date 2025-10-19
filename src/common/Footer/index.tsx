import { Discord, Steam, Twitter, Youtube } from '@src/Icons';
import { useTranslation } from '@utils/i18n';
import { FooterContainer, FooterIconsContainer } from './Footer.styles';
import FooterIcon from './FooterIcon';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://mainasutto.com';

const footerIcons = [
  {
    id: 'steam',
    Component: Steam,
    href: 'https://store.steampowered.com/app/2580170/',
    alt: 'Steam Page',
  },
  {
    id: 'discord',
    Component: Discord,
    href: `${baseURL}/discord`,
    alt: 'Discord',
  },
  {
    id: 'twitter',
    Component: Twitter,
    href: `${baseURL}/twitter`,
    alt: 'Twitter / X',
  },
  {
    id: 'youtube',
    Component: Youtube,
    href: 'https://www.youtube.com/c/DAndrëwBox',
    alt: 'Youtube',
  },
];

export const Footer = () => {
  const { t, Trans } = useTranslation();

  return (
    <FooterContainer>
      <FooterIconsContainer>
        {footerIcons.map((icon) => (
          <FooterIcon key={`footer-socials-${icon.id}`} {...icon} />
        ))}
      </FooterIconsContainer>
      <span>
        <Trans i18nKey="footer_line1" />
      </span>
      <span>{t('footer_line2')}</span>
    </FooterContainer>
  );
};

export default Footer;
