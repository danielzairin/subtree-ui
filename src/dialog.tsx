"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export type DialogProps = {
  children?: React.ReactNode;
};

export type DialogRef = {
  show: () => void;
  showModal: () => void;
  close: () => void;
};

export const Dialog = forwardRef<DialogRef, DialogProps>((props, ref) => {
  const { children } = props;
  const dialogElementRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    show: () => dialogElementRef.current?.show(),
    showModal: () => dialogElementRef.current?.showModal(),
    close: () => dialogElementRef.current?.close(),
  }));

  return (
    <dialog ref={dialogElementRef} style={{ maxWidth: "600px" }}>
      {children}
    </dialog>
  );
});

export function useDialogRef() {
  return useRef<DialogRef>(null);
}
