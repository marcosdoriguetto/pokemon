import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    padding: number;
    margin: number;
    boxSizing: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}