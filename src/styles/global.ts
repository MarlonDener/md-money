import { createGlobalStyle } from 'styled-components';

type Props = {
  COLORS: {
    red: string;
    green: string;
    blue: string;
    white: string;
    blueLight: string;
    background: string;
    shape: string;
    textTitle: string;
    textBody: string;
    borderGray: string;
    mediumGray: string;
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

    borderGray: '#d7d7d7',
    mediumGray: '#d9d9d9',
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
    
    input, button {
        outline: none;
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
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: ${Theme.COLORS.background};
        position: relative;
        border-radius: 0.25rem;
        padding: 2rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        
        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.5);
        }
    }
`;
