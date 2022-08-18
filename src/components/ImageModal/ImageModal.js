import React, { useRef } from "react";

import Modal from "../Modal/Modal";

import "./ImageModal.scss";

const ImageModal = props => {
    const imageRef = useRef(null);
    const onClose = () => imageRef.current.setAttribute('src','');

    return (
        <div className="image-modal">

        </div>
    )
};

export default ImageModal;