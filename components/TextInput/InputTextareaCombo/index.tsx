import React, { useContext } from 'react';
import cn from 'classnames';

// Components
import { TextInputContext } from '../TextInputContext';

export const InputTextareaCombo = () => {
  const { 
    type,
    value, 
    handleChange, 
    inputId, 
    placeholder, 
    disabled, 
    viewOnly,
    isError,
    clearText,
    height
  } = useContext(TextInputContext);

  const inputCommonProps = {
    id: inputId,
    value: value,
    onChange: handleChange,
    placeholder: placeholder,
    disabled: disabled || viewOnly,
    className: cn(
      'py-2 pl-3',
      'text-sm',
      'border rounded-lg w-full',
      'focus:border-B00 focus:outline-none',
      'placeholder:text-sm placeholder:text-A50',
      {
        'border-D00': isError,
        'border-A100': !isError,
        'pointer-events-none': disabled,
        'pr-10': clearText || require,
        'pr-3': !clearText && !require,
      }
    ),
  };

  return (
    <React.Fragment>
      {type === 'input' ? (
        <input type="text" {...inputCommonProps} />
      ) : (
        <textarea 
          {...inputCommonProps} 
          style={{
            resize: 'vertical',
            height,
          }}
        />
      )}
    </React.Fragment>
  );
}