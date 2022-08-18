import React, { useRef } from "react";

import Modal from "../Modal/Modal";

import "./TrailerModal.scss";

const TrailerModal = props => {
    const trailerRef = useRef(null);

    const onClose = () => trailerRef.current.setAttribute('src', '');

    return (
        <div className="trailer-modal">
            <Modal active={false} modalId={`modal-${props.item.id}`} onClose={onClose}>
                <iframe className="trailer-modal__iframe" ref={trailerRef} title={`${props.title} - trailer`} allowFullScreen></iframe>
            </Modal>
        </div>
    )
};

export default TrailerModal;