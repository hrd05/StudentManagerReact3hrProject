import StudentContext from "./student-context";
import { useState } from "react";

const StudentProvider = (props) => {
    const [studentList, updateStudentList] = useState([]);
    const [studentDetail, setStudentDetail] = useState({});

    const addStudentHandler = (student) => {
        updateStudentList([...studentList, student]);
    }

    const removeStudentHandler = (id) => {
        const updatedStudentList = studentList.filter((std) => std.id !== id);
        updateStudentList(updatedStudentList);
    }

    const studentUpdateDetailHandler = (std) => {
        setStudentDetail(std);
    }

    const stdEditDetailHandler = (std) => {

        const index = studentList.findIndex((student) => student.id === std.id);
        if (index !== -1) {
            const updatedArr = [...studentList];
            updatedArr[index].name = std.name;
            updatedArr[index].address = std.address;
            updatedArr[index].mobile = std.mobile;
            updateStudentList(updatedArr);
        }
    }


    const studentContext = {
        studentList: studentList,
        totalStudents: studentList.length,
        addStudent: addStudentHandler,
        removeStudent: removeStudentHandler,
        updateStudentData: studentDetail,
        studentUpdateDetail: studentUpdateDetailHandler,
        stdEditedDetail: stdEditDetailHandler
    }

    return (
        <StudentContext.Provider value={studentContext} >{props.children}</StudentContext.Provider>
    );
}

export default StudentProvider;