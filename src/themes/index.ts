import { Theme } from '../interfaces';

const light = '#F6F0E7';
const dark = '#1F232C';
const lightBlur = '#f7f1e9cc';
const darkBlur = '#1f232ccc';
const lightHover = '#f1ebe2';
const darkHover = '#1b1f25cc';
const contrstLight = '#e36858';
const contrstLightHover = '#de5252';
const contrstDark = '#96ABAD';
const contrstDarkHover = '#7ba2a6';

export const theme: { [key: string]: Theme } = {
  light: {
    background: light,
    backgroundBlur: lightBlur,
    backgroundHover: lightHover,
    secondaryBackground: light,
    contrastBackground: contrstLight,
    contrastBackgroundHover: contrstLightHover,
    text: dark,
    textInvert: light,
    button: contrstLight,
  },

  dark: {
    background: dark,
    backgroundBlur: darkBlur,
    backgroundHover: darkHover,
    secondaryBackground: dark,
    contrastBackground: contrstDark,
    contrastBackgroundHover: contrstDarkHover,
    text: light,
    textInvert: dark,
    button: contrstDark,
  },
};
