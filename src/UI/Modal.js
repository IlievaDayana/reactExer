import React from "react";
import styles from './Modal.module.css'

const Modal = (props) => {
    const clearError = (event) => {
        if (!event.target.className.includes('window')) {
            props.onClearError()
        }
    }
    const isVisible = props.error.length;
    const myContent = <div onClick={clearError} className={styles.modal}>
                            <div className={styles['modal-window']}>
                                <p>{props.error}</p>
                            </div>
                        </div>
    return (<>{isVisible ? myContent : ''}</>

    )
}

export default Modal;