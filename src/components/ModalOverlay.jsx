import { useClient } from "next/data-client";
import React, { useEffect } from "react";

const ModalOverlay = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          className="w-full h-96"
          src={videos[0].youtubeLink}
          title={videos[0].title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalOverlay;
