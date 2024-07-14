import React from 'react';
import { ToastContext } from '../ToastProvider';

function RadioButton({variant}) {
  const id = React.useId();
  const { variantValue, setVariantValue } = React.useContext(ToastContext);
  return (<>
            <label htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={variant}
                checked={variantValue === variant}
              onChange={event => setVariantValue(event.target.value)}
              />
              {variant}
            </label>
          </>
       );
}

export default RadioButton;
