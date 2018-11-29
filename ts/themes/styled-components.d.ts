/// <reference types="react" />
import * as styledComponents from 'styled-components';
import ThemeInterface from './ThemeInterface';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.BaseThemedCssFunction<ThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface, ThemeInterface>, any>;
export { css, keyframes, ThemeProvider };
export default styled;
