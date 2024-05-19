import { useState, useContext } from "react";
import Card from "../UI/Card";
import classes from './StudentForm.module.css';
import StudentContext from "../../Store/student-context";

const StudentForm = (props) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAdress] = useState('');
    const studentCtx = useContext(StudentContext);

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(name, mobile, address);
        const student = {
            name: name,
            mobile: mobile,
            address: address
        }
        studentCtx.addStudent(student);
    }

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const mobileHandler = (event) => {
        setMobile(event.target.value);

    }

    const addressHandler = (event) => {
        setAdress(event.target.value);
    }


    return (
        <Card className={classes.modal}  >
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" value={name} onChange={nameHandler} ></input>
                <label>Mobile:</label>
                <input type="tel" value={mobile} onChange={mobileHandler} ></input>
                <label>Address:</label>
                <input type="text" value={address} onChange={addressHandler} ></input>
                <button  >Add</button>
                <button onClick={props.onClose} type="button">Close</button>
            </form>
        </Card>
    )
}


export default StudentForm;