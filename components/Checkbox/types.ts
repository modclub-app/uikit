type ThemeTypes = 'black' | 'darkGreen' | 'lightGreen' | 'blue' | 'lavender';
type SizeTypes = 'large' | 'medium' | 'small';
type RoundedTypes = 'md' | 'lg' | 'xl' | '2xl';

/**
 * Prop types for the Checkbox component.
 */
export interface CheckboxPropTypes {
  /**
   * Determines if the checkbox is initially checked.
   * 
   * @default false
   */
  checked?: boolean;

  /**
   * Theme color for the checkbox when checked.
   * 
   * @default 'darkGreen'
   */
  theme?: ThemeTypes;

  /**
   * Size of the checkbox. Can be 'small', 'medium', or 'large'.
   * 
   * @default 'medium'
   */
  size?: SizeTypes;

  /**
   * Rounded corners style for the checkbox. Can be 'none', 'sm', 'md', 'lg', or 'xl'.
   * 
   * @default 'md'
   */
  rounded?: RoundedTypes;

  /**
   * If true, the checkbox is disabled and cannot be interacted with.
   * 
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback function called when the checkbox state changes.
   * 
   * @param checked The new state of the checkbox (true if checked, false if unchecked).
   */
  onChange?: (checked: boolean) => void;
}
