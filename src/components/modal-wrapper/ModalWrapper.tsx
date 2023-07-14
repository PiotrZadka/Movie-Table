import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";

export const ModalWrapper = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>Submit review</Button>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 400, backgroundColor: "white" }}>{children}</Box>
      </Modal>
    </>
  );
};
