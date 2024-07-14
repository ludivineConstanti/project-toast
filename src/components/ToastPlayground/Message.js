import React from 'react';

import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';

function Message() {
    const id = React.useId();
    const {messageValue, setMessageValue} = React.useContext(ToastContext);
    
  return (
        <div className={styles.row}>
          <label
            htmlFor={id}
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id={id} className={styles.messageInput} value={messageValue} onChange={event => setMessageValue(event.target.value)}/>
          </div>
        </div>
  );
}

export default Message;
