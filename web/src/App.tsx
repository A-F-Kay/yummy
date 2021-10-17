import React from 'react';
import { EuiHeader, EuiHeaderLink, EuiHeaderLinks, EuiHeaderLogo, EuiHeaderSectionItem } from '@elastic/eui';
import { Page } from 'components/Page';
import { Todo } from 'components/Todo';


const App = () => (
  <div>
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo iconType='monitoringApp'>Yummy</EuiHeaderLogo>
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink isActive>Docs</EuiHeaderLink>

          <EuiHeaderLink>Code</EuiHeaderLink>

          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
    <Page>
      <Todo />
    </Page>
  </div>
);

export default App;
