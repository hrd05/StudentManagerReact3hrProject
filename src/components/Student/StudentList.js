import classes from './StudentList.module.css';
import StudentContext from '../../Store/student-context';
import { useContext } from 'react';
import Card from '../UI/Card';

const StudentList = (props) => {
    const studentCtx = useContext(StudentContext);

    const removeStudentHandler = (event) => {
        // console.log(event.target.id);
        studentCtx.removeStudent(event.target.id);
    }

    const updateStudentHandler = (event) => {
        props.onEdit();
        const studentDetail = studentCtx.studentList.find((student) => student.id === event.target.id);
        studentCtx.studentUpdateDetail(studentDetail);
    }

    const studentArrayList = studentCtx.studentList.map(student => (
        <li className={classes.student} key={student.id} >
            <div className={classes.list}>
                {`Name: ${student.name} , Mobile: ${student.mobile}, Address: ${student.address}`}
            </div>
            <div className={classes.action}>
                <button id={student.id} onClick={removeStudentHandler} >Remove</button>
                <button id={student.id} onClick={updateStudentHandler}>Edit</button>
            </div>
        </li>
    ))
    return (
        <Card className={classes['student-list']} >
            <ul>{studentArrayList}</ul>
        </Card>
    )
}

export default StudentList;