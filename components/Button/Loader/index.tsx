import React from 'react';
import cn from 'classnames';
import { Spinner } from '../../Spinner';
import { LoaderPropTypes } from '../types';
import { SPINNER_SIZE, spinnerSkin, spinnerThemeColor } from './constants';

/**
 * The loader is embedded within the button component, rendering with absolute positioning 
 * and a specified z-index to ensure its visibility above other elements. 
 * The loader's appearance is dynamically configured based on the button's skin 
 * and size attributes, allowing for a cohesive integration that adapts to the button's 
 * current state and styling context.
 */
export const Loader: React.FC<LoaderPropTypes> = ({
  theme = 'darkGreen',
  skin,
  size,
}) => {
  const spinnerSize = SPINNER_SIZE[size];
  const spinnerSkinStyle = spinnerSkin(theme);
  const loaderBg = spinnerThemeColor(theme);
  return (
    <span className={cn(
      'absolute z-10',
      'w-full h-full',
      'flex items-center justify-center',
      'pointer-events-none',
      loaderBg[skin]
    )}>
      <Spinner 
        size={spinnerSize}
        skin={spinnerSkinStyle[skin]}
      />
    </span>
  );
}