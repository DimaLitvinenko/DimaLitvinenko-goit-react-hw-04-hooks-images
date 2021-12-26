import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

export default function Modal({ onClose, children }) {
   useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);

      return () => {};
   }, []);

   const handleKeyDown = ({ code }) => {
      code === 'Escape' && onClose();
   };

   const handleOverlayClick = ({ currentTarget, target }) => {
      currentTarget === target && onClose();
   };

   return createPortal(
      <div className={style.overlay} onClick={handleOverlayClick}>
         <div className={style.modal}>{children}</div>
      </div>,
      document.querySelector('#modal-root'),
   );
}
