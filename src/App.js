
import React, { useState } from 'react';
import './App.css';

import Modal from './components/Modal';
import Student from './components/Student/Student';
import StudentProvider from './Store/ContextProvider';
import StudentList from './components/Student/StudentList';

function App() {
  const [formActive, setFormActive] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // const updateStudentHandler = () => {
  //   updateTotalStudents((prevNum) => {
  //     return prevNum + 1;
  //   })
  // }

  const updateFormStatus = () => {
    setFormActive(true);
  }

  const closeFormModal = () => {
    if (editMode) {
      setEditMode(false);
    }
    setFormActive(false);
  }

  const editModeHandler = () => {
    setEditMode(true);
  }


  return (
    <StudentProvider  >
      <Student onClick={updateFormStatus} />
      {formActive && <Modal onClose={closeFormModal} />}
      {editMode && <Modal editMode={editMode} onClose={closeFormModal} />}
      <h1>All Students</h1>
      <StudentList onEdit={editModeHandler} />
    </StudentProvider>


  );
}

export default App;
