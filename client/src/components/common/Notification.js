import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const Notification = ({ msg, show, setShow }) => {
  const onCloseHandler = () => {
    setShow(false);
    msg = "";
  };
  return (
    <Toast
      onClose={onCloseHandler}
      show={show}
      delay={2000}
      className="text-primary"
    >
      <Toast.Header>Notification</Toast.Header>
      <Toast.Body>{msg}</Toast.Body>
    </Toast>
  );
};

export default Notification;
