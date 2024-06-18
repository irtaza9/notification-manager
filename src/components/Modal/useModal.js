import { useState } from "react";

export const useModal = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleModal = (active) => setisOpen(active);
  return { isOpen, handleModal };
};
