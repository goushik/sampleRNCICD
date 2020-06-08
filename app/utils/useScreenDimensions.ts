import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

const SM_SCREEN_BREAKPOINT = 610;

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = (result: {screen: ScaledSize}) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isTablet: screenData.width > SM_SCREEN_BREAKPOINT,
    isLandscape: screenData.width > screenData.height,
  };
};

export default useScreenDimensions;
