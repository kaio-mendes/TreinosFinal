import ModalTreinos from './ModalTreinos';
import styles from './Treinos.module.css'
import { useState } from 'react';

function Treinos(){
    
const [openModal, setOpenModal] = useState(false);
    return(
        <div className={styles.head}>
        <h1>Treinos:</h1> 
        <div className={styles.end}>
        <button className={styles.abrir} onClick={()=> setOpenModal(true)}>Montar Treino</button>

        <ModalTreinos isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        </ModalTreinos>
        </div>                   
           <button>Treino 1</button>

        </div>
    )
}

export default Treinos;   
    