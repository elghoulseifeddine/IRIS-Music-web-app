import { registerProfile } from "JS/Actions/profileActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import Modal from "react-modal";

// reactstrap components
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddModal = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  const handleRegisterProfile = (e) => {
    e.preventDefault();
    if (description === "") {
      return closeModal(), alert("You are missing some inputs!!");
    }
    dispatch(registerProfile({ description }));
    closeModal();
    setDescription("");
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: "black",
          color: "beige",
          borderRadius: "30%",
        }}
        onClick={openModal}
      >
        Add Description
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Description : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the description ..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: "black" }}
            onClick={(e) => handleRegisterProfile(e)}
          >
            Add
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddModal;
