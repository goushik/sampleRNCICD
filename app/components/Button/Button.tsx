import React from 'react';
import {ButtonWrapper, LargeText, MediumText} from './Button.styles';
import {StyleProp, ViewStyle} from 'react-native';

export enum ButtonType {
  Primary,
  Secondary,
}

export enum ButtonSize {
  Medium,
  Large,
}

export const Button = ({
  onPress,
  text,
  type = ButtonType.Primary,
  size,
  disabled = false,
  style,
}: Props) => {
  const TextComponent = size === ButtonSize.Large ? LargeText : MediumText;

  return (
    <ButtonWrapper
      type={type}
      size={size}
      disabled={disabled}
      onPress={onPress}
      style={style}>
      <TextComponent type={type} disabled={disabled}>
        {text}
      </TextComponent>
    </ButtonWrapper>
  );
};

type Props = {
  onPress(): void;
  text: string;
  size: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
