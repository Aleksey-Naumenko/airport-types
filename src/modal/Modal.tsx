import React from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//styles
import "./modal.scss";

type ModalPropsT = {
  active: boolean;
  children: any;
  setActive: (T: boolean) => void;
};

const Modal = ({ active, children, setActive }: ModalPropsT) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal active" : "modal"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? "modal__content active" : "modal__content"}
      >
        <div className="modal-close">
          <FontAwesomeIcon
            onClick={() => setActive(false)}
            icon={faTimesCircle}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
