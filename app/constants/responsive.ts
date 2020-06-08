import {Dimensions, StatusBar, Platform, PixelRatio} from 'react-native';

import {ifIphoneX} from './iphoneX';
import breakpoints from './breakpoints';
// getDefaultHeaderHeight
const {height, width} = Dimensions.get('window');

const isSmallScreen =
  width <= breakpoints.smallPhoneWidth ||
  height <= breakpoints.smallPhoneHeight;

const isNormalScreen =
  width > breakpoints.smallPhoneWidth && width < breakpoints.mediumPhoneWidth;

const isBigScreen = width >= breakpoints.mediumPhoneWidth;

const isBiggestPhoneScreen = width >= breakpoints.bigPhoneWidth;

export const dpToPx = (size: number) => PixelRatio.roundToNearestPixel(size);

const normalizedFontSize = (basicFontSize: number) => {
  if (isSmallScreen) {
    return basicFontSize - 1;
  }
  if (isNormalScreen) {
    return basicFontSize;
  }
  if (isBigScreen) {
    return basicFontSize + 1;
  }

  return basicFontSize;
};

const responsiveHeight = (h: number) => height * (h / 100);

const responsiveWidth = (w: number) => width * (w / 100);

const getRealHeight = (w: number, h: number, elementWidth: number) =>
  (h * elementWidth) / w;

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return ifIphoneX(44, 20);
  }

  return StatusBar.currentHeight;
};

export const statusBarHeight = getStatusBarHeight() || 0;

// https://github.com/react-navigation/stack/blob/3ed1b283f14388d10213a640b153eb74c1d8536a/src/views/Header/HeaderSegment.tsx#L70
// used the same values as used in react-navigation
const headerBarHeight = Platform.OS === 'ios' ? 44 : 56;

const mapHighLightArea = 0.15; // 15% of screen height

const BASE_CAZ_CORNER_CIRCLE_RADIUS = 2500;
export const extraStatusBarHeight =
  Platform.OS === 'ios' ? ifIphoneX(44, 20) : 0;

export default {
  isSmallScreen,
  isNormalScreen,
  isBigScreen,
  isBiggestPhoneScreen,
  normalizedFontSize,
  responsiveHeight,
  responsiveWidth,
  getRealHeight,
  statusBarHeight,
  headerBarHeight,
  mapHighLightArea,
  BASE_CAZ_CORNER_CIRCLE_RADIUS,
};
