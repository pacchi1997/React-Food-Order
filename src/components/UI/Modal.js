import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const BackDrop=(props)=>{
return <div className={styles.backdrop} onClick={props.onHide}></div>
}
const ModalOverlay=(props)=>{
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
 }
    

function Modal(props){

    const portal= document.getElementById("overlay");

return (
<>
{ createPortal(<BackDrop onHide={props.onHide}/>,portal)}
{ createPortal(<ModalOverlay >{props.children}</ModalOverlay>,portal)}
</>
);
}

export default Modal;