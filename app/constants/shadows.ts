import {Platform} from 'react-native';
import colors from './colors';

const generateStyledComponentStyleIOS = ({
  color = colors.black,
  x = 0,
  y = 0,
  blur = 0,
}) => `box-shadow: ${x}px ${y}px ${blur}px ${color};`;

export const shadows = {
  primaryButtonLarge: Platform.select({
    ios: generateStyledComponentStyleIOS({
      blur: 16,
      y: 4,
      color: colors.primaryButtonShadow,
    }),
    android: 'elevation: 2',
  }),
  primaryButtonMedium: Platform.select({
    ios: generateStyledComponentStyleIOS({
      blur: 4,
      y: 2,
      color: colors.primaryButtonShadow,
    }),
    android: 'elevation: 2',
  }),
  secondaryButtonLarge: Platform.select({
    ios: generateStyledComponentStyleIOS({
      blur: 16,
      y: 4,
      color: colors.secondaryButtonShadow,
    }),
    android: 'elevation: 2',
  }),
  secondaryButtonMedium: Platform.select({
    ios: generateStyledComponentStyleIOS({
      blur: 4,
      y: 2,
      color: colors.secondaryButtonShadow,
    }),
    android: 'elevation: 2',
  }),
  disabled: Platform.select({
    ios: generateStyledComponentStyleIOS({}),
    android: 'elevation: 0',
  }),
};
