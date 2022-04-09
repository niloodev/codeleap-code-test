/* eslint-disable @typescript-eslint/no-empty-interface */

// Import createGlobalStyle component of styled-components.
import { createGlobalStyle } from 'styled-components'

// 🐸: Export theme-pallete object and type, this makes variables easily accessible through javascript and CSS
// possibilitating easy and soft integrations, like a theme system or just a color update.
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

// Export GlobalStyle component with the stylization.
export const GlobalStyle = createGlobalStyle`
    /* Roboto font import. */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Sets CSS variables from the theme palette. */
    :root {
        --primary: ${props => props.theme.colors.primary};
        --secondary: ${props => props.theme.colors.secondary};
        --tertiary: ${props => props.theme.colors.tertiary};
        --quaternary: ${props => props.theme.colors.quaternary};
    }

    /* Core classes and properties. */
    html,
    body,
    #root {
        height: 100%;
        min-height: 300px;
        min-width: 260px;
        
        padding: 0;
        margin: 0;

        background-color: var(--secondary);
        font-family: 'Roboto';
    }

    /* Scrollbar customization. */
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

// 🐸: Make styled-components DefaultTheme extends ThemePaletteType from global-style, this tells styled-components
// module that DefaultTheme (accessible through arrow functions in CSS in JS like ${props => props.theme}) is inheriting
// the properties from ThemePalette.
declare module 'styled-components' {
    export interface DefaultTheme extends ThemePalette {}
}
