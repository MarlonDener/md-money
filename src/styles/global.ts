import { createGlobalStyle } from 'styled-components';

type Props = {
  COLORS: {
    red: '#E62E4D';
    green: '#33CC95';
    blue: '#0c096b';
    white: '#FFF';
    blueLight: '#1510b0';

    background: '#F2F0F5';
    shape: '#FFFFFF';

    textTitle: '#363F5F';
    textBody: '#969CB3';
  };
};

export const Theme: Props = {
  COLORS: {
    red: '#E62E4D',
    green: '#33CC95',
    blue: '#0c096b',
    white: '#FFF',
    blueLight: '#1510b0',

    background: '#F2F0F5',
    shape: '#FFFFFF',

    textTitle: '#363F5F',
    textBody: '#969CB3',
  },
};

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: ${Theme.COLORS.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
