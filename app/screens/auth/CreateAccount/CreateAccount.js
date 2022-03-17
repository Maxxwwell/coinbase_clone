/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { ButtonContainer, FormContainer, LabelText, Scaffold, SignupButton, Textfield, TitleText, Widget } from '../Login/styles';
import { SigninText } from '../../welcome/styles';

export default function CreateAccount({ navigation }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Scaffold>
            <TitleText>Create your account</TitleText>

            <FormContainer>
                <Widget>
                    <LabelText>First Name</LabelText>
                    <Textfield
                        value={firstName}
                        placeholder="Jon"
                        onChangeText={(text) => setFirstName(text)}
                    />
                </Widget>

                <Widget>
                    <LabelText>Last Name</LabelText>
                    <Textfield
                        value={lastName}
                        placeholder="Doe"
                        onChangeText={(text) => setLastName(text)}
                    />
                </Widget>

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
