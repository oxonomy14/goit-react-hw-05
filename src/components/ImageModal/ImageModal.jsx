import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70vw", // або фіксована: "800px"
    height: "95vh", // або фіксована: "600px"
    overflow: "auto", // щоб можна було скролити, якщо вміст великий
    padding: "20px", // бажано трохи внутрішніх відступів
    borderRadius: "10px", // для краси
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
};

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  /* ;*/

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onRequestClose}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "15px",
              marginRight: "15px auto ",
            }}
          >
            Close
          </button>
        </div>
        <img
          src={selectedImage?.urls?.full}
          alt={selectedImage?.alt_description || "Selected"}
          style={{ maxWidth: "100%" }}
        />
        <div
          style={{
            padding: "10px 20px",
          }}
        >
          <p>Description: {selectedImage?.alt_description}</p>
          <p>Full Width: {selectedImage?.width}</p>
          <p>
            Download Image:{" "}
            <a
              href={selectedImage?.urls?.full}
              target="_blank"
              rel="noopener noreferrer"
            >
              DownLoad
            </a>
          </p>
        </div>
      </>
    </Modal>
  );
};

export default ImageModal;
