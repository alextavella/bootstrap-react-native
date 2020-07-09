import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#312e38"
        translucent={true}
      />
      <Routes />
    </>
  );
};

export default App;
