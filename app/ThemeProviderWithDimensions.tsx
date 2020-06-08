import React, {ReactNode} from 'react';
import theme from './constants/theme';
import {ThemeProvider} from 'styled-components/native';
import useScreenDimensions from './utils/useScreenDimensions';

function ThemeProviderWithDimensions({children}: {children: ReactNode}) {
  const screenData = useScreenDimensions();
  return (
    <ThemeProvider theme={{...theme, screenData}}>{children}</ThemeProvider>
  );
}

export default ThemeProviderWithDimensions;
