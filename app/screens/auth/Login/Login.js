/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
// import { Scaffold } from '../../welcome/styles';
import { ButtonContainer, FormContainer, HorizontalTile, LabelText, SignupButton, TextButton, Textfield, TileText, TitleText, Widget } from './styles';
import { useState } from 'react';
import { Scaffold } from './styles';
import { SigninText } from '../../welcome/styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Scaffold>
      <TitleText>Sign in to Coinbase</TitleText>

      <FormContainer>
        <Widget>
          <LabelText>Email</LabelText>
          <Textfield
            keyboardType="email-address"
            value={email}
            placeholder="example@email.com"
            onChangeText={(text) => setEmail(text)}
          />
        </Widget>

        <Widget>
          <LabelText>Password</LabelText>
          <Textfield

            value={password}
            placeholder="******"
            onChangeText={(text) => setPassword(text)}
          />
        </Widget>

        <HorizontalTile>
          <TextButton>
            <TileText>Forgort password</TileText>
          </TextButton>
          <TextButton>
            <TileText>Privacy policy</TileText>
          </TextButton>
        </HorizontalTile>
      </FormContainer>



      <ButtonContainer>
        <SignupButton android_ripple={{ color: 'white' }}
          onPress={() => navigation.navigate('Home')}>
          <SigninText>Sign in</SigninText>
        </SignupButton>
      </ButtonContainer>
    </Scaffold>

  );
}
