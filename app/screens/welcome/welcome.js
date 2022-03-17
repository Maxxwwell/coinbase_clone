/* eslint-disable prettier/prettier */
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../theme/colors';
import { ButtonContainer, GetStarted, Scaffold, Signin, SigninText, SignupButton, Start, Title, Title2 } from './styles';

export default function Welcome({ navigation }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 2000);
    }, []);

    return (
        <Scaffold>
            <StatusBar backgroundColor="#0052fe" />
            <Title>Coinbase</Title>
            <Title2>Clone</Title2>
            {visible && (
                <ButtonContainer>
                    <SignupButton onPress={() => navigation.navigate('CreateAccount')}
                        android_ripple={{ color: '#0052fe' }} >
                        <Start>
                            Get started
                        </Start>
                    </SignupButton>

                    <Signin>
                        <SigninText onPress={() => navigation.navigate('Login')}>
                            Sign in
                        </SigninText>
                    </Signin>
                </ButtonContainer>
            )
            }
        </Scaffold>
    );
}
