import Modal from "@mui/material/Modal";

export default function ModalP({ open, handleModal, children }) {
  return (
    <Modal
      open={open}
      onClose={() => handleModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backgroundColor: "rgb(101, 115, 125, 0.9)" }}
    >
      {children}
    </Modal>
  );
}
