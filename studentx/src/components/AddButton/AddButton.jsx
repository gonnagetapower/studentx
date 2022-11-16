import React from 'react';
import './AddButton.css';

const AddButton = ({ router, createPanel }) => {
  return (
    <div className="addButton">
      <div onClick={() => router.pushPage(createPanel)} className="plus radius"></div>
    </div>
  );
};

export default AddButton;
