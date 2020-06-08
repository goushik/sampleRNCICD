import React,{useState} from 'react';
import {
  Container,
  ButtonContainer,
} from './LoginScreen.styles';
import Input from 'components/Input/Input';
import {ExtraSpace} from 'components/Space/Space';
import {Paragraph} from 'components/Text/Text';
import {Button, ButtonType, ButtonSize} from 'components/Button/Button';


const LoginScreen=()=>{

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const handleEmail=(email:string)=>{
       setEmail(email)
    }
    const handlePassword=(password:string)=>{
        setPassword(password)
     }

    return(
        <Container>
           <Input placeholder="Email" value={email} onChangeText={handleEmail} />
           <ExtraSpace count={8} />
           <Input placeholder="Password" value={password} onChangeText={handlePassword} />
           <ExtraSpace count={8} />
           <ButtonContainer>
           <Button
            type={ButtonType.Secondary}
            size={ButtonSize.Large}
            onPress={() => {             
            }}
            text="Sign In"
            />
            </ButtonContainer>
            <ExtraSpace count={5} />
            <Paragraph>Already have an account?</Paragraph>
        </Container>
    )
}

export default LoginScreen;