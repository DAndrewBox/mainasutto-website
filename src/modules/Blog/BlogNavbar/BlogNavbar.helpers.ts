interface NavItem {
  label: string;
  href: string;
  currentPage?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: 'blog_nav_home',
    href: '/',
  },
  {
    label: 'blog_nav_blog',
    href: '/blog',
    currentPage: true,
  },
  {
    label: 'blog_nav_presskit',
    href: 'https://www.indiedb.com/games/mainasutto-im-not-alone/presskit',
  },
];
