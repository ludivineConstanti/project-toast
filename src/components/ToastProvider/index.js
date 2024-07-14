import React from 'react';

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({children}) {
  const [messageValue, setMessageValue] = React.useState('');
  const [variantValue, setVariantValue] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);
  return (
    <ToastContext.Provider value={{messageValue, setMessageValue, variantValue, setVariantValue, toasts, setToasts}}>
        {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
