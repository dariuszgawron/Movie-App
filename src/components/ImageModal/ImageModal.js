import React, { useRef } from "react";

import Modal from "../Modal/Modal";

import "./ImageModal.scss";

const ImageModal = props => {
    const imageRef = useRef(null);
    const onClose = () => imageRef.current.setAttribute('src','');

    return (
        <div className="image-modal">
            <Modal modalId={`modal-${props.item.id}`} active={false} onClose={onClose}>
                <img ref={imageRef} className="image-modal__img" alt={`${props.item.title || props.item.name} - gallery`} />
            </Modal>
        </div>
    )
};

export default ImageModal;