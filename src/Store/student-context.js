
import React from "react";


const StudentContext = React.createContext({
    studentList: [],
    totalStudents: 0,
    addStudent: (student) => { },
    removeStudent: (id) => { },
    updateStudentData: {},
    studentUpdateDetail: (std) => { },
    stdEditedDetail: (std) => { }
})

export default StudentContext;