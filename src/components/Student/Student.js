import classes from './Student.module.css';
import { useContext } from 'react';
import Button from '../UI/Button';
import StudentContext from '../../Store/student-context';


const Student = (props) => {
    const studentCtx = useContext(StudentContext);

    return (
        <div className={classes.main}>
            <h1>Student Manager</h1>
            <h3>Total Students: <span>{studentCtx.totalStudents}</span></h3>
            <Button onClick={props.onClick} >Add New Student</Button>
        </div>
    )

}

export default Student;