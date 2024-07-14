
import React from "react";

const useEscapeKey = (callback) => {
    React.useEffect(() => {
        const handleDismiss = (e) => {
          if (e.key === 'Escape') {
            callback();
          }
        }
        if (window) {
          window.addEventListener('keydown', handleDismiss )
        }
        return () => {
          if (window) {
            window.removeEventListener('keydown', handleDismiss)
          }
        }
      },[]);
}

export default useEscapeKey;