import React from 'react';

import AppProvider from './src/store/AppProvider';
import RootNavigator from './src/navigations/RootNavigator';

const App = () => {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
