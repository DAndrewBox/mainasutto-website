import { Link } from 'react-router-dom';
import { navItems } from './BlogNavbar.helpers';
import { BlogNavbarContainer, BlogNavbarItem, BlogNavbarItemContainer, BlogNavbarWrapper } from './BlogNavbar.styles';

export const BlogNavbar = () => {
  return (
    <BlogNavbarWrapper>
      <BlogNavbarContainer>
        <Link to={'/blog'}>Mainasutto Newsletter</Link>
        <BlogNavbarItemContainer>
          {navItems.map((item) => (
            <BlogNavbarItem key={`nav-${item.label}`} href={item.href} $currentPage={item?.currentPage ?? false}>
              {item.label}
            </BlogNavbarItem>
          ))}
        </BlogNavbarItemContainer>
      </BlogNavbarContainer>
    </BlogNavbarWrapper>
  );
};

export default BlogNavbar;
