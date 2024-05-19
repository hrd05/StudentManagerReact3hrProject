import StudentContext from "./student-context";
import { useState } from "react";

const StudentProvider = (props) => {
    const [studentList, updateStudentList] = useState([]);

    const addStudentHandler = (student) => {
        updateStudentList([...studentList, student]);
    }


    const studentContext = {
        studentList: studentList,
        totalStudents: studentList.length,
        addStudent: addStudentHandler,
        removeStudent: (id) => { }
    }

    return (
        <StudentContext.Provider value={studentContext} >{props.children}</StudentContext.Provider>
    );
}

export default StudentProvider;