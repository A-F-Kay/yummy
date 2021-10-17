import React from 'react';
import { ComingSoon } from 'components/ComingSoon';
import { PageInfo } from 'src/types/routes';

export enum PageLink {
  Home = '/',
  Apps = '/apps',
  Users = '/users',
  Favorites = '/favorites',
  Settings = '/settings'
}


export const PAGES_DICT: Record<PageLink, PageInfo> = {
  [PageLink.Home]: {
    link: PageLink.Home,
    name: 'Home',
    render: () => <ComingSoon />,
  },
  [PageLink.Apps]: {
    link: PageLink.Apps,
    name: 'Apps',
    render: () => <ComingSoon featureName='Apps' />,
  },
  [PageLink.Users]: {
    link: PageLink.Users,
    name: 'Users',
    render: () => <ComingSoon featureName='Users' />,
  },
  [PageLink.Favorites]: {
    link: PageLink.Favorites,
    name: 'Favorites',
    render: () => <ComingSoon featureName='Favorites' />,
  },
  [PageLink.Settings]: {
    link: PageLink.Settings,
    name: 'Settings',
    render: () => <ComingSoon featureName='Settings' />,
  },
};

export const PAGES_ARRAY = Object.values(PAGES_DICT);
