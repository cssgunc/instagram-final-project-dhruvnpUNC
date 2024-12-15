import "./Modal.css";

function Modal(props) {
    return (
        <>
            <div className="background"></div>
            <div className="modal">
                <div className="parent">
                <i className="fa-solid fa-xmark exit-button" onClick={() => props.setIsModalOpen(false)}></i>
                <img className="image" src={props.postInfo.picture}></img>
                </div>
            </div>
        </>
    );
}

export default Modal;