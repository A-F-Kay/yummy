import React from 'react';
import { EuiPageTemplate } from '@elastic/eui';
import { SideBar } from 'components/SideBar';

type Props = React.PropsWithChildren<unknown>;


export const Page = ({ children }: Props) => (
  <EuiPageTemplate
    pageSideBar={<SideBar />}
    pageHeader={{
      iconType: 'dashboardApp',
      pageTitle: 'Main page',
      rightSideItems: [],
    }}
  >
    {children}
  </EuiPageTemplate>
);
