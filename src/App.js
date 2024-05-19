
import React, { useState } from 'react';
import './App.css';

import Modal from './components/Modal';
import Student from './components/Student/Student';
import StudentProvider from './Store/ContextProvider';
import StudentList from './components/Student/StudentList';

function App() {
  // const [totalStudents, updateTotalStudents] = useState(0);
  const [formActive, setFormActive] = useState(false);

  // const updateStudentHandler = () => {
  //   updateTotalStudents((prevNum) => {
  //     return prevNum + 1;
  //   })
  // }

  const updateFormStatus = () => {
    setFormActive(true);
  }

  const closeFormModal = () => {
    setFormActive(false);
  }


  return (
    <StudentProvider  >
      <Student onClick={updateFormStatus} />
      {formActive && <Modal onClose={closeFormModal} />}
      <h1>All Students</h1>
      <StudentList />
    </StudentProvider>


  );
}

export default App;
