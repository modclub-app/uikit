export const argTypes = {
  skin: {
    control: 'select',
    options: [
      'standard',
      'grey',
      'linear'
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
  theme: {
    control: 'select',
    options: [
      'darkGreen',
      'lightGreen',
      'black',
      'blue',
      'lavender'
    ],
    table: {
      defaultValue: { summary: 'darkGreen' }
    }
  },
}

export const args = {};