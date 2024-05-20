import { useState, useContext, useEffect } from "react";
import Card from "../UI/Card";
import classes from './StudentForm.module.css';
import StudentContext from "../../Store/student-context";

const StudentForm = (props) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [btnName, setBtnName] = useState('Add');
    const studentCtx = useContext(StudentContext);

    useEffect(() => {
        if (props.editMode) {
            setName(studentCtx.updateStudentData.name);
            setMobile(studentCtx.updateStudentData.mobile);
            setAddress(studentCtx.updateStudentData.address);
            setBtnName('Update');
        } else {
            setName('');
            setMobile('');
            setAddress('');
            setBtnName('Add');
        }
    }, [props.editMode, studentCtx.updateStudentData]);

    const submitHandler = (event) => {
        event.preventDefault();
        if (props.editMode) {
            const student = {
                id: studentCtx.updateStudentData.id,
                name: name,
                mobile: mobile,
                address: address
            }
            studentCtx.stdEditedDetail(student);
        }
        else {
            const student = {
                id: Math.random().toFixed(2).toString(),
                name: name,
                mobile: mobile,
                address: address
            }
            studentCtx.addStudent(student);
        }
        props.onClose();
    }

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const mobileHandler = (event) => {
        setMobile(event.target.value);
    }

    const addressHandler = (event) => {
        setAddress(event.target.value);
    }

    return (
        <Card className={classes.modal}  >
            <form onSubmit={submitHandler}>
                <div className={classes['form-input']}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={nameHandler} />
                    <label>Mobile:</label>
                    <input type="tel" value={mobile} onChange={mobileHandler} />
                    <label>Address:</label>
                    <input type="text" value={address} onChange={addressHandler} />
                </div>
                <button>{btnName}</button>
                <button onClick={props.onClose} type="button">Close</button>
            </form>
        </Card>
    )
}

export default StudentForm;
