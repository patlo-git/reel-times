import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
  triggerElementRef: React.RefObject<HTMLElement>;
  modalHeadingRef: React.RefObject<HTMLHeadingElement>;
};

const Modal = ({
  showModal,
  onClose,
  children,
  triggerElementRef,
  modalHeadingRef,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [labelledbyId, setLabelledbyId] = useState<string>("");

  useEffect(() => {
    if (!showModal && triggerElementRef.current) {
      triggerElementRef.current.focus();
    }

    if (showModal && modalHeadingRef?.current?.id) {
      setLabelledbyId(modalHeadingRef.current.id);
    }
  }, [showModal, triggerElementRef, modalHeadingRef]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <div
      id="dialog"
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledbyId}
      ref={modalRef}
    >
      <div
        onKeyDown={handleKeyDown}
        className="modal-content"
        role="presentation"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          data-close-dialog
          onClick={onClose}
          ref={closeButtonRef}
          aria-label="close modal"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
