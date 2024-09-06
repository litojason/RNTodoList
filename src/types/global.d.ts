import '@react-navigation/native';
import {Theme} from '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export interface ExtendedTheme extends Theme {
    dark: boolean;
    colors: Theme['colors'] & {
      modalOverlay: string;
      surface: string;
      onSurface: string;

      white: string;
      red: string;
      green: string;
      blue: string;
      yellow: string;
      grey: string;
      lightGrey: string;
    };
  }
  export function useTheme(): ExtendedTheme;
}
