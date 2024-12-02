export type NavigationItemType = {
  title: string;
  href: string;
};

export const NavigationPageUrls = {
  HomePage: '/',
  CharactersPage: '/characters/',
};

export const PageRoutes: NavigationItemType[] = [
  { title: 'Home', href: NavigationPageUrls.HomePage },
  { title: 'Characters', href: NavigationPageUrls.CharactersPage },
];
