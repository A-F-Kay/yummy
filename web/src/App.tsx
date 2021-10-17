import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { EuiHeader, EuiHeaderLink, EuiHeaderLinks, EuiHeaderLogo, EuiHeaderSectionItem } from '@elastic/eui';
import { Page } from 'components/Page';
import { PAGES_ARRAY } from './constants/routes';


const App = () => (
  <div>
    <Router>
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
        <Switch>
          {PAGES_ARRAY.map((p) => (
            <Route exact key={p.link} path={p.link}>
              {p.render()}
            </Route>
          ))}
        </Switch>
      </Page>
    </Router>
  </div>
);

export default App;
