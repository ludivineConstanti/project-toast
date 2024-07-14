import React from 'react';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import Form from './Form';
import ToastProvider from '../ToastProvider';



function ToastPlayground() {
  return (
    <ToastProvider>
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>

      <Form />
    </div>
    </ToastProvider>
  );
}

export default ToastPlayground;
