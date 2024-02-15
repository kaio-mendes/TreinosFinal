import ModalTreinos from './ModalTreinos';
import styles from './Treinos.module.css'
import { useState } from 'react';
import {MdModeEdit } from "react-icons/md";

function Treinos(){
    
const [openModal, setOpenModal] = useState(false);
    return(
        <div className={styles.head}>
        <h1>Treinos:</h1> 
        <div className={styles.end}>
        <button className={styles.abrir} onClick={()=> setOpenModal(true)}>Montar Treino</button>
        <button className={styles.boteditar} onClick={(/*parametros */) =>console.log("funcionou")}><MdModeEdit className="edit" alt="editar"/></button>

        <ModalTreinos isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        </ModalTreinos>
        </div>           
            <div className={styles.treinos}></div>
           
           

        </div>
    )
}

export default Treinos;   
    