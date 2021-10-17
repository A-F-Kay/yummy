import { EuiPageTemplate } from '@elastic/eui';
import { SideBar } from 'components/SideBar';
import React from 'react';

type Props = React.PropsWithChildren<unknown>;


export const Page = ({ children }: Props) => {
  return (
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
};
