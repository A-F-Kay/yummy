import { EuiListGroup, EuiListGroupItem } from '@elastic/eui';
import React from 'react';
import { useHistory } from 'react-router';
import { PageLink, PAGES_ARRAY } from 'src/constants/routes';

export const SideBar = () => {
  const history = useHistory();

  const openPage = (route: PageLink) => {
    history.push(route);
  };

  return (
    <EuiListGroup flush={false} bordered={false}>
      {PAGES_ARRAY.map((p) => (
        <EuiListGroupItem key={p.link} onClick={() => openPage(p.link)} label={p.name} isActive={false} />
      ))}
    </EuiListGroup>
  );
};
