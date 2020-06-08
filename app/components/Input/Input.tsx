import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';

type InputProps = Pick<
  TextInputProps,
  'value' | 'onChangeText' | 'placeholder'
> 

const StyledInput=styled.TextInput.attrs({
    keyboardType:"email-address",
    placeholderTextColor: "white"
})`
borderBottomWidth:1px;
borderBottomColor:white;
fontSize:20px;
margin-horizontal:40px;
width:80%;
`;
const Input=({
    value,
    onChangeText,
    placeholder,
}:InputProps)=>{
    return(        
    <StyledInput 
     placeholder={placeholder}
     value={value}
     onChangeText={onChangeText}
     />
    )
}

export default Input;