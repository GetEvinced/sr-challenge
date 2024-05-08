import React, { useRef, useEffect } from 'react';

function Status({msg}) {
    const statusRef = useRef(null);
    
  useEffect(() => {
      statusRef.current.innerHTML = `<span aria-live="polite" role="alert">${msg}</span>`
        return () => {
            setTimeout(() => {
              if(statusRef.current) {
                statusRef.current.innerHTML = "" 
              }
            }, 5000);
        }
  }, [msg])
  
    return (
    <div className="alert"  ref={statusRef} >

      
    </div>
  );
}

export default Status;