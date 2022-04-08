/* eslint-disable @typescript-eslint/no-empty-interface */

// import createGlobalStyle component of styled-components
import { createGlobalStyle } from 'styled-components'

// export theme-pallete object and type
// this makes variables easily accessible through javascript, possibilitating easy and soft integrations
export const themePalette: ThemePalette = {
    colors: {
        primary: '#000000',
        secondary: '#DDDDDD',
        tertiary: '#777777',
        quaternary: '#FFFFFF',
    },
}

export interface ThemePalette {
    colors: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
    }
}

// export global-style component
export const GlobalStyle = createGlobalStyle`
    /* font import */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* sets css variables from theme-palette */
    :root {
        --primary: ${props => props.theme.colors.primary};
        --secondary: ${props => props.theme.colors.secondary};
        --tertiary: ${props => props.theme.colors.tertiary};
        --quaternary: ${props => props.theme.colors.quaternary};
    }

    /* main classes */
    html,
    body,
    #root {
        height: 100%;
        min-height: 300px;
        
        padding: 0;
        margin: 0;

        background-color: var(--secondary);
        font-family: 'Roboto';
    }

    /* scrollbar customization */
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
        border-radius: 5px;
    }
`

// make styled-components DefaultTheme extends ThemePaletteType from global-style
declare module 'styled-components' {
    export interface DefaultTheme extends ThemePalette {}
}
