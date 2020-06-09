import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {colors, sizes, textStyles} from 'constants';
type InputProps = Pick<
  TextInputProps,
  'value' | 'onChangeText' | 'placeholder'
>;

const StyledInput = styled.TextInput.attrs({
  keyboardType: 'email-address',
  placeholderTextColor: colors.white,
})`
  borderBottomWidth: ${sizes.widthDefault};
  borderBottomColor: ${colors.white};
  fontSize: ${textStyles.fontSize.large};
  margin-horizontal: ${sizes.footerMargin};
  width: 80%;
  color: ${colors.white};
`;

const Input = ({value, onChangeText, placeholder}: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
