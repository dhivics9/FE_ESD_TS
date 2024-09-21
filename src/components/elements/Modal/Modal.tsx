import React, { ReactNode, forwardRef } from "react";

// Main Modal component
interface ModalProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ id, children, className = "" }, ref) => {
    return (
      <dialog id={id} className={`modal ${className}`} ref={ref}>
        {children}
      </dialog>
    );
  },
);

// ModalBox component
interface ModalBoxProps {
  children: ReactNode;
  className?: string;
}

const ModalBox: React.FC<ModalBoxProps> = ({ children, className = "" }) => {
  return <div className={`modal-box ${className}`}>{children}</div>;
};

// ModalAction component
interface ModalActionProps {
  children: ReactNode;
  className?: string;
}

const ModalAction: React.FC<ModalActionProps> = ({
  children,
  className = "",
}) => {
  return <div className={`modal-action ${className}`}>{children}</div>;
};

// Export all components as named exports
export { Modal, ModalBox, ModalAction };
