import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const ModalProvider = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal, modalTitle } = props;
  return (
    <div>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-blue-950 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-blue-50 p-4 flex flex-col gap-4 rounded">
          <div className="flex justify-between items-center">
            <span className="font-medium">{modalTitle}</span>
            <Button
              onClick={() => closeModal()}
              className="text-stone-950 dark:text-stone-50 hover:text-stone-950 hover:dark:text-stone-950"
            >
              <CloseIcon className="dark:text-stone-50" />
            </Button>
          </div>
          <div className="bg-stone-50 rounded-md dark:bg-stone-900 overflow-hidden">
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
