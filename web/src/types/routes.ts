import { PageLink } from 'src/constants/routes';

export type PageInfo = {
  link: PageLink,
  name: string,
  render: () => JSX.Element;
}
