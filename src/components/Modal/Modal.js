import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import './Modal.scss';

const Modal = props => {
    const [active, setActive] = useState(false);
    const modalRef = useRef(null);

    const closeModal = () => {
        modalRef.current.classList.remove('modal--active');
        if(props.onClose) props.onClose();
    };

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div className={`modal ${active ? 'modal--active' : ''}`} ref={modalRef} id={props.modalId}>
            <div className="modal-content">   
                {props.children}
                <div className="modal-content__close" onClick={closeModal}>
                    <i className="modal-content__close-icon bx bx-x"></i>
                </div>
            </div>
        </div>
    )
};

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    modalId: PropTypes.string.isRequired,
    onClose: PropTypes.func
};

export default Modal;