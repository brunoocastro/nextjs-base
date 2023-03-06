import {} from "crypto";
import { nanoid } from "nanoid";
import { Dispatch, PropsWithChildren, useEffect } from "react";
import { useOutClick } from "../hooks/useOutClick";
import { Portal } from "./portal";

interface IModal {
  isOpen: boolean;
  setOpen: Dispatch<boolean>;
  showBackdrop?: boolean;
}

const ModalBackdrop = () => {
  return (
    <div
      id="modal-backdrop"
      tabIndex={-1}
      style={{
        opacity: 0.7,
        zIndex: 50,
        position: "fixed",
        inset: 0,
        background: "#000",
      }}
    />
  );
};

export const Modal = ({
  isOpen,
  setOpen,
  showBackdrop = true,
  children,
}: PropsWithChildren<IModal>) => {
  const modalId = nanoid();

  const { OutClickProps, register } = useOutClick({
    referenceId: `modal-${modalId}`,
    onOutClick: () => setOpen(false),
  });

  useEffect(() => {
    isOpen && register();
  }, [isOpen, register]);

  return (
    <Portal selector="#portal-modal">
      {isOpen ? (
        <>
          {showBackdrop && <ModalBackdrop />}
          <div {...OutClickProps}>{children}</div>
        </>
      ) : (
        <></>
      )}
    </Portal>
  );
};
