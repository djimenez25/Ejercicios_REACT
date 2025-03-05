import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
}
