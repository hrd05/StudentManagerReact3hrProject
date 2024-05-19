
import React from "react";


const StudentContext = React.createContext({
    studentList: [],
    totalStudents: 0,
    addStudent: (student) => { },
    removeStudent: (id) => { }
})

export default StudentContext;