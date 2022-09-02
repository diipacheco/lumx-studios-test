import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      elements: string;
      text: string;
      lightPurple: string;
      darkGrey: string;
      grey: string;
      lightGrey: string;
      white: string;
    };
  }
}
