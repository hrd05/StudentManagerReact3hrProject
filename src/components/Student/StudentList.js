import classes from './StudentList.module.css';
import StudentContext from '../../Store/student-context';
import { useContext } from 'react';
import Card from '../UI/Card';

const StudentList = () => {
    const studentCtx = useContext(StudentContext);

    const studentArrayList = studentCtx.studentList.map(student => (
        <li className={classes.student}>
            <div >
                {`Name: ${student.name} , Mobile: ${student.mobile}, Address: ${student.address}`}
            </div>
            <div>
                <button>Remove</button>
                <button>Edit</button>
            </div>
        </li>
    ))
    return (
        <Card>
            <ul>{studentArrayList}</ul>
        </Card>
    )
}

export default StudentList;