import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';


function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);
  useEscapeKey(() => setToasts([]));
  
  return (
    <ol className={styles.wrapper} 
    role="region"
    aria-live="polite"
    aria-label="Notification">
      {toasts.map(toast => <li className={styles.toastWrapper}>
        <Toast key={toast.id} variant={toast.variant} onClose={toast.onClose}>{toast.children}</Toast>
      </li>)}
    </ol>
  );
}

export default ToastShelf;
