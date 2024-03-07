import React from "react";

interface ModalProps {
  props?: any;
}

const Modal = ({ props }: ModalProps) => {
  return (
    <>
      {/* The button to open modal */}
      <a href="#my_modal_8" className="btn">
        open modal
      </a>
      {/* Put this part before </body> tag */}
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with anchor links</p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
