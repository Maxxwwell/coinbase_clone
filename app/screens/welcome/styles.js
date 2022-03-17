/* eslint-disable prettier/prettier */
import { Pressable, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    align-items: center;
    position: relative;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primaryBlue};
`;

export const ButtonContainer = styled(View)`
    position: absolute;
    width: 100%;
    bottom: 30px;
    padding-horizontal: 20px;

`;


export const Title = styled(Text)`
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    font-size: 35px;
`;

export const Title2 = styled(Title)`
    font-size: 30px;
`;




export const SignupButton = styled(Pressable)`
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    elevation: 5;
`;

export const Signin = styled(SignupButton)`
    background-color: ${(props) => props.theme.colors.primaryBlue};
    elevation: 0;
    margin-top: 5px;
`;


export const Start = styled(Text)`
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primaryBlue};
`;

export const SigninText = styled(Start)`
    color: ${(props) => props.theme.colors.white};
`;
