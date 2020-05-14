import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  const { selectedOption, closeModal } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={closeModal}
    >
      <h1>Selected Modal</h1>
      <p>{selectedOption}</p>
      <button onClick={closeModal}>OK</button>
    </Modal>
  );
};

export default OptionModal;
