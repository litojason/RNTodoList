import {DefaultTheme, DarkTheme, ExtendedTheme} from '@react-navigation/native';

export const lightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3C4DDB',
    background: '#F4F6FC',
    surface: '#FFFFFF',
    onSurface: '#30323D',
    text: '#30323D',
    modalOverlay: 'rgba(0, 0, 0, 0.2)',

    white: '#FFFFFF',
    red: '#FA6322',
    green: '#5AC08F',
    blue: '#5F96E9',
    yellow: '#FABD22',
    grey: '#838CA7',
    lightGrey: '#D4DBEF',
  },
};

export const darkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#3C4DDB',
    background: '#000000',
    surface: '#121212',
    onSurface: '#F4F6FC',
    text: '#F4F6FC',
    modalOverlay: 'rgba(0, 0, 0, 0.2)',

    white: '#FFFFFF',
    red: '#FA6322',
    green: '#5AC08F',
    blue: '#5F96E9',
    yellow: '#FABD22',
    grey: '#838CA7',
    lightGrey: '#838CA7',
  },
};
