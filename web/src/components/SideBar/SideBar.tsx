import { EuiListGroup, EuiListGroupItem } from '@elastic/eui';
import React from 'react';

export const SideBar = () => (
  <EuiListGroup flush={false} bordered={false}>
    <EuiListGroupItem onClick={console.log} label="Users" isActive={false} isDisabled />
    <EuiListGroupItem onClick={console.log} label="Apps" isDisabled />
    <EuiListGroupItem onClick={console.log} label="Favorites" isDisabled />
    <EuiListGroupItem onClick={console.log} label="Settings" isDisabled />
  </EuiListGroup>
);
