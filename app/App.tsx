import React from 'react';
import {LoginScreen} from 'screens';
import ThemeProviderWithDimensions from './ThemeProviderWithDimensions';

const App = () => {
  return (
    <ThemeProviderWithDimensions>
     <LoginScreen />
     </ThemeProviderWithDimensions>
  );
};

export default App;

