import { switchAnatomy as parts } from '@chakra-ui/anatomy/dist/declarations/src';
import { cssVar, PartsStyleFunction } from '@chakra-ui/theme-tools';

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");
// const $diff = cssVar("switch-track-diff"); // maybe should be using this for the transform instead?

// have chosen to put all styles in to variant (size & colorScheme) but could split these out for more flexibility/variability
const variantGm: PartsStyleFunction<typeof parts> = (props) => {
  // could use mode(light, dark)(props) for colors to be driven by theme rather than 'checked'..?
  return {
    container: {
      [$width.variable]: "3.5rem",
      [$height.variable]: "1.5rem",
      display: 'inline-flex',
      alignItems: 'center',
    },
    track: {
      bg: 'black',
      _checked: {
        bg: 'white',
      },
    },
    thumb: {
      bg: 'gray.100',
      _checked: {
        bg: 'gray.900',
      },
    },
    // this is a child element that sits alongside the thumb in the dom, therefore requires transforming it to sit within the track
    label: {
      color: 'white',
      fontSize: 'sm',
      ml: 'auto',
      pr: '2px',
      fontFamily: 'gm',
      transform: `translate(calc(-1 * ${$width.reference} / 2), -2px)`,
      _checked: {
        color: 'black',
        transform: `translate(calc(-1 * ${$width.reference} + 2px), -2px)`,
      },
    },
  };
};

export const SwitchTheme = {
  variants: {
    gm: variantGm,
  }
};
