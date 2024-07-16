import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';

interface ModalWrapperProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ModalWrapper: FC<ModalWrapperProps> = ({ title, children, isOpen, setIsOpen }) => {
  const modalRoot = document.getElementById('modal-root');

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className="modal-backdrop w-full h-full bg-opaque py-12 px-24">
      <dialog className="modal-dialog bg-primary relative w-full h-full p-12 pb-0 flex flex-col justify-between" aria-modal="true" aria-labelledby="modal-title" open>
        <header className="h-1/5">
          <h2 id="modalTitle">{title}</h2>
          <button aria-label="Close modal" onClick={() => setIsOpen(false)}>×</button>
        </header>
        <main className="h-auto">
          {children}
        </main>
        <footer className="h-1/6">
          <button>Submit</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </footer>
      </dialog>
    </div>
  , modalRoot);
};

export default ModalWrapper;
