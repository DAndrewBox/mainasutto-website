import { Link } from 'react-router-dom';
import { BlogNavbarContainer, BlogNavbarItem, BlogNavbarItemContainer, BlogNavbarWrapper } from './BlogNavbar.styles';

export const BlogNavbar = () => {
  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Blog',
      href: '/blog',
      currentPage: true,
    },
    {
      label: 'Presskit',
      href: 'https://www.indiedb.com/games/mainasutto-im-not-alone/presskit',
    },
  ];

  return (
    <BlogNavbarWrapper>
      <BlogNavbarContainer>
        <Link to={'/blog'}>Mainasutto Newsletter</Link>
        <BlogNavbarItemContainer>
          {navItems.map((item, index) => (
            <BlogNavbarItem key={`nav-${index}`} href={item.href} $currentPage={item?.currentPage ?? false}>
              {item.label}
            </BlogNavbarItem>
          ))}
        </BlogNavbarItemContainer>
      </BlogNavbarContainer>
    </BlogNavbarWrapper>
  );
};
