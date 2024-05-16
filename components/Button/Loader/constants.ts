import cn from 'classnames';
import { LoaderSizeTypes, ThemTypes } from '../types';

/**
 * Spinner Style Display Options
 */
export const spinnerSkin = (them: ThemTypes) => ({
  standard: 'grey',
  inline: them === 'darkGreen' ? 'standard' : 'black',
  grey: them === 'darkGreen' ? 'standard' : 'black',
  inlineGrey: them === 'darkGreen' ? 'standard' : 'black',
  light: 'green',
  pink: 'pink'
}) 

/**
 * Spinner Size Display Options
 */
export const SPINNER_SIZE: LoaderSizeTypes = {
  large: 'small',
  medium: 'small',
  small: 'tiny',
  tiny: 'tiny'
}

/**
 * Spinner Background Display Options
 */
export const spinnerThemColor = (them: ThemTypes) => ({
  standard: cn({
    // Dark green
    'bg-A00': them === 'darkGreen',

    // Black
    'bg-F00': them === 'black',
  }),
  inline: 'bg-white',
  grey: 'bg-C00',
  inlineGrey: 'bg-white',
  light: 'bg-white',
  pink: 'bg-G00'
})