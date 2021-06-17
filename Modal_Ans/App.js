import { useState } from "react";

import "./App.css";


const Modal = ({
  buttonText = "Open Modal",
  cancelButtonText,
  content,
  width = 400
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>{buttonText}</button>
      {isOpen && (
        <div className="modal-wrapper" onClick={handleClose}>
          <div style={{ width }} className="modal-container" onClick={e => e.stopPropagation()}>
            <h2>Modal title</h2>
            <button className="cross-btn" onClick={handleClose}>&#x02A2F;</button>
            <p>{content}</p>
            <button onClick={handleClose}>{cancelButtonText}</button>
            <button>Save changes</button>
          </div>
        </div>
      )}
    </div>
  );
}

const App = () => {
  const content = <p>Hello Modal</p>;
  return (
    <>
      <h1>Hello world</h1>
      <Modal
        buttonText="Open"
        cancelButtonText="Go Back"
        content={content}
        width={400}
      />
    </>
  );
};

export default App;
