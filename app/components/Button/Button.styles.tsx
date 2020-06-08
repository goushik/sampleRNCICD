import styled, {DefaultTheme} from 'styled-components/native';
import {HeadlineSmall, Headline} from '../Text/Text';
import {ButtonType, ButtonSize} from './Button';
import {colors,
sizes,
buttonSizes,
shadows,
} from "constants";

const getButtonBackgroundColor = (
  type: ButtonType,
  disabled: boolean,
  theme: DefaultTheme,
) => {
  if (disabled) {
    return colors.disabledButton;
  }
  if (type === ButtonType.Primary) {
    return colors.primary;
  }
  return colors.white;
};

const getFontColor = (
  type: ButtonType,
  disabled: boolean,
  theme: DefaultTheme,
) => {
  if (disabled) {
    return colors.disabledButtonText;
  }
  if (type === ButtonType.Primary) {
    return colors.white;
  }
  return colors.darkBlue;
};

const getButtonHeight = (size: ButtonSize, theme: DefaultTheme) => {
  if (size === ButtonSize.Large) {
    return buttonSizes.large;
  }
  return buttonSizes.medium;
};

const getButtonShadow = (
  type: ButtonType,
  size: ButtonSize,
  disabled: boolean,
  theme: DefaultTheme,
) => {
  if (disabled) {
    return shadows.disabled;
  }
  if (type === ButtonType.Primary) {
    return size === ButtonSize.Large
      ? shadows.primaryButtonLarge
      : shadows.primaryButtonMedium;
  }
  if (type === ButtonType.Secondary) {
    return size === ButtonSize.Large
      ? shadows.secondaryButtonLarge
      : shadows.secondaryButtonMedium;
  }
};

const getBorderWidth = (type: ButtonType) => {
  return type === ButtonType.Secondary ? 1 : 0;
};

const getBorderRadius = (size: ButtonSize) => {
  return size === ButtonSize.Large ? 6 : 4;
};

export const ButtonWrapper = styled.TouchableOpacity<{
  type: ButtonType;
  size: ButtonSize;
  disabled: boolean;
}>`
  height: ${props => getButtonHeight(props.size, props.theme)}px;
  ${props => props.size === ButtonSize.Large && 'width: 100%'};
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    getButtonBackgroundColor(props.type, props.disabled, props.theme)};
  border-width: ${props => getBorderWidth(props.type)}px;
  border-color: ${colors.whiteButtonBorder}
  padding-horizontal: ${sizes.marginMedium}
  border-radius: ${props => getBorderRadius(props.size)}px;
  ${props =>
    getButtonShadow(props.type, props.size, props.disabled, props.theme)}
`;

export const LargeText = styled(Headline)<{
  type: ButtonType;
  disabled: boolean;
}>`
  color: ${props => getFontColor(props.type, props.disabled, props.theme)};
`;

export const MediumText = styled(HeadlineSmall)<{
  type: ButtonType;
  disabled: boolean;
}>`
  color: ${props => getFontColor(props.type, props.disabled, props.theme)};
`;
