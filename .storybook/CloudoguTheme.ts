import { create } from '@storybook/theming/create';
import logoUrl from './public/logo.svg';
export default create({
    base: 'light',
    brandTitle: 'Cloudogu Theme Storybook',
    brandUrl: 'https://www.cloudogu.com',
    brandImage: logoUrl,
    brandTarget: '_self',
    colorPrimary: '#003250',
    colorSecondary: '#003250',
    appBorderColor: '#00426B',
    textColor: '#003250',
    barTextColor: '#003250',
    textInverseColor: '#FCFCFD',
    textMutedColor: '#003250',
    barBg: '#f8fcff',
    appBg: '#f8fcff',
    inputTextColor: '#003250',
    barSelectedColor: '#003250',
    fontBase: 'Calibri, Gill Sans, Gill Sans MT, Liberation Sans, Carlito, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif'
});