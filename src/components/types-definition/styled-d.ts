/* eslint-disable @typescript-eslint/no-empty-interface */
import { ThemePaletteType } from '../global-css-definition/global-style'

// make styled-components DefaultTheme extends ThemePaletteType from global-style
declare module 'styled-components' {
    export interface DefaultTheme extends ThemePaletteType {}
}
