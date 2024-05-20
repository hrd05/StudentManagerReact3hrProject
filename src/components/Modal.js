import { React, Fragment } from "react"
import ReactDOM from "react-dom";
import StudentForm from "./Student/StudentForm";
import classes from './Modal.module.css';

const Backdrop = props => {
    return (<div className={classes.backdrop} />);
}




const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('modal-root'))}
            {ReactDOM.createPortal(<StudentForm editMode={props.editMode} onClose={props.onClose} />, document.getElementById('modal-root'))}
        </Fragment>
    )
}

export default Modal;