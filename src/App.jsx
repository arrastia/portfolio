import { Fragment, useContext } from 'react';

import { GlobalStyle } from 'GlobalStyles';

import { ThemeContext } from 'styled-components';

import { Styles } from './App.styles';

import { UserColumn } from 'views/.components/UserColumn';

import { Home } from 'views/Home';

export const App = () => {
  const { theme } = useContext(ThemeContext);

  const renderContent = (view = 'HOME') => {
    switch (view) {
      case 'HOME':
        return <Home />;

      default:
        break;
    }
  };

  return (
    <Fragment>
      <GlobalStyle theme={theme} />
      <main>
        <Styles.Glass>
          <UserColumn />
          <div style={{ flex: 2 }}>{renderContent()}</div>
        </Styles.Glass>
      </main>
    </Fragment>
  );
};
