/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    padding-top: 20px;
    position: relative;
    background-color: ${(props) => props.theme.colors.white};
`;


export const ButtonContainer = styled(View)`
    position: absolute;
    width: 100%;
    bottom: 20px;
    justify-content: center;
    padding: 20px;
    /* padding-horizontal: 20px; */

`;

export const SignupButton = styled(Pressable)`
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${(props) => props.theme.colors.primaryBlue};
    border-radius: 8px;
    elevation: 5;
    
`;
export const TitleText = styled(Text)`
        padding-top: 15px;
        padding-horizontal: 15px;
        font-size: 22px;
        color: black;
        font-weight: bold;
`;

export const Widget = styled(View)`
    margin-top: 15px;
    
`;


export const FormContainer = styled(View)`
    padding-horizontal: 15px;
`;

export const LabelText = styled(Text)`
    font-size: 15px;
    color: black;
    font-weight: bold;
`;


export const TileText = styled(Text)`
    font-size: 16px;
    /* color: black; */
    font-weight: 600;
`;

export const Textfield = styled(TextInput)`
    font-size: 15px;
    border-width: 1px;
    border-radius: 5px;
    padding-left: 10px;
    border-color: lightgray;
`;

export const HorizontalTile = styled(View)`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export const TextButton = styled(TouchableOpacity)`
    /* align-items: center;
    justify-content: center; */
    height: 50px;
    
`;


