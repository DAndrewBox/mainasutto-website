import HeaderVideoPoster from '@assets/images/headervideo_v3.webp';
import MainasuttoLogo from '@assets/images/logo_v2.webp';
import backgroundVideo from '@assets/videos/headervideo_v3.webm';
import { CaretDown, CaretRight, Discord, Steam, Twitter, Youtube } from '@src/Icons';
import { useTranslation } from '@utils/i18n';
import { useCallback, useMemo, useState } from 'react';
import i18n from '../../../public/i18n';
import { HeaderContainer, HeaderContent, HeaderCTA, HeaderNavBar, HeaderNavItem, HeaderOverlay, HeaderSocialsContainer, NavLangMenu, NavLangMenuItem } from './Header.styles';
import HeaderIcon from './HeaderIcon/HeaderIcon';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://mainasutto.com';
const socials = [
  {
    iconSrc: Steam,
    url: 'https://store.steampowered.com/app/2580170/',
    alt: 'Steam Wishlist',
  },
  {
    iconSrc: Discord,
    url: `${baseURL}/discord`,
    alt: 'Discord',
  },
  {
    iconSrc: Twitter,
    url: `${baseURL}/twitter`,
    alt: 'Twitter',
  },
  {
    iconSrc: Youtube,
    url: 'https://www.youtube.com/c/DAndrëwBox',
    alt: 'Youtube',
  },
];

export const Header = () => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  /*
  const [yOffset, setYOffset] = useState(0);
  // Parallax effect for header video
  // -- This effect is disabled for now because it's causing performance issues
  window.onscroll = () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    setYOffset((currentScroll / (documentHeight - windowHeight)) * 25);
  };
  */

  const { t } = useTranslation();
  const labelPlayDemo = t('header_cta_playDemo');

  /**
   * Handles the change of the application language. It saves the selected language in localStorage.
   * @param lang - The language code to set the application language to.
   */
  const handleChangeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    setLangMenuOpen(false);
  }, []);

  const navItems = useMemo(
    () => [
      {
        label: t('header_nav_itemBlog'),
        url: '/blog',
      },
      {
        label: t('header_nav_itemTeam'),
        url: '#team',
        onClick: () => {
          // Scroll to Team Section without using IDs
          const teamSection = document.getElementsByTagName('section')[4];
          window.scrollTo({
            top: teamSection.offsetTop,
            behavior: 'smooth',
          });
        },
      },
      {
        label: t('header_nav_itemPresskit'),
        url: 'https://www.indiedb.com/games/mainasutto-im-not-alone/presskit',
      },
    ],
    [t],
  );

  const langMenuItems = useMemo(
    () => [
      {
        label: t('header_nav_langEn'),
        onClick: () => {
          handleChangeLanguage('en');
        },
        isActive: i18n.language === 'en',
      },
      {
        label: t('header_nav_langEs'),
        onClick: () => {
          handleChangeLanguage('es');
        },
        isActive: i18n.language === 'es',
      },
      {
        label: t('header_nav_langJp'),
        onClick: () => {
          handleChangeLanguage('jp');
        },
        isActive: i18n.language === 'jp',
      },
    ],
    [t, handleChangeLanguage],
  );

  return (
    <HeaderContainer>
      <img className="videoPoster" src={HeaderVideoPoster} alt="" />(
      <video autoPlay loop playsInline muted>
        <source src={backgroundVideo} type="video/webm" />
      </video>
      )
      <HeaderOverlay />
      <HeaderContent>
        <img src={MainasuttoLogo} alt="Mainasutto Logo" />
        <HeaderSocialsContainer>
          {socials.map((social, index) => (
            <HeaderIcon key={`header-social-${social.alt}`} Component={social.iconSrc} href={social.url} alt={social.alt} delay={1.16 + index} />
          ))}
        </HeaderSocialsContainer>
        <HeaderCTA href="https://dandrewbox.itch.io/mainasutto-ina" target="_blank">
          {`[ ${labelPlayDemo} ]`}
        </HeaderCTA>
      </HeaderContent>
      <HeaderNavBar className={langMenuOpen ? 'active' : ''}>
        {navItems.map((item) => (
          <HeaderNavItem key={`nav-item-${item.label}`} href={item.url} onClick={item?.onClick || (() => {})}>
            {item.label}
          </HeaderNavItem>
        ))}
        <HeaderNavItem onClick={() => setLangMenuOpen(!langMenuOpen)}>
          <span>{t('header_nav_itemLanguage')}</span>
          {!langMenuOpen && <CaretRight color={'#FFFFFF'} size={'1.25rem'} />}
          {langMenuOpen && <CaretDown color={'#FFFFFF'} size={'1.25rem'} />}
        </HeaderNavItem>
      </HeaderNavBar>
      {langMenuOpen && (
        <NavLangMenu>
          {langMenuItems.map((item) => (
            <NavLangMenuItem key={`lang-${item.label}`} onClick={item.onClick} className={item.isActive ? 'active' : ''}>
              {item.label}
            </NavLangMenuItem>
          ))}
        </NavLangMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
