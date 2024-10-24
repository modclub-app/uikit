export const argTypes = {
  size: {
    control: 'select',
    options: [
      'large',
      'medium',
      'small',
      'tiny'
    ],
    table: {
      defaultValue: { summary: 'medium' }
    }
  },
  skin: {
    control: 'select',
    options: [
      'standard',
      'inline',
      'grey',
      'inlineGrey',
      'light',
      'limpid'
    ]
  },
  theme: {
    control: 'select',
    options: [
      'darkGreen',
      'black',
      'blue',
      'lavender'
    ],
    table: {
      defaultValue: { summary: 'darkGreen' }
    }
  },
  iconName: {
    control: 'text',
    options: null
  },
  indicator: {
    control: 'select',
    options: [
      null,
      'red',
      'green',
      'grey',
      'yellow'
    ]
  },
  rounded: {
    control: 'select',
    options: [
      'full',
      'xl',
      'lg',
      'md'
    ]
  },
  spaceBetween: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
}

export const args = {
  size: 'medium',
  skin: 'standard',
  buttonText: 'Button',
};