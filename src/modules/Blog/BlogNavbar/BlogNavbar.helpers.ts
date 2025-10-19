interface NavItem {
  label: string;
  href: string;
  currentPage?: boolean;
}

export const navItems: NavItem[] = [
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
