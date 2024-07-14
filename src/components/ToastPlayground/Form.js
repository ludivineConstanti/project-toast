import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Message from './Message';
import RadioButton from './RadioButton';
import { VARIANT_OPTIONS, ToastContext } from '../ToastProvider';



function Form() {
  const { variantValue, setVariantValue, messageValue, setMessageValue, setToasts } = React.useContext(ToastContext);
  
  return (
      <form className={styles.controlsWrapper} onSubmit={(event) => {
        event.preventDefault();
          const id = Math.random();
          setToasts(toasts => [...toasts, {id, children: messageValue, variant: variantValue, onClose: () => { 
            setToasts(v => v.filter(t => t.id !== id));
          } 
        }])
          setMessageValue('');
          setVariantValue(VARIANT_OPTIONS[0]);
        
      }}>
        <Message />

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (<RadioButton variant={variant} key={variant}/>))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button >Pop Toast!</Button>
          </div>
        </div>
      </form>
  );
}

export default Form;
