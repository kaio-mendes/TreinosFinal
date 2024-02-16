import { useState } from 'react';
import styles from './Metas.module.css'
import Modal from './Modal';

function Metas(){
    const [openModal, setOpenModal] = useState(false);


    return(
        <div className={styles.head}>
        
            <h1>Você está na página Metas</h1>
            <div className={styles.end}>
            <button className={styles.abrir} onClick={()=> setOpenModal(true)}>Calcular IMC</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            </Modal>
            </div>
        </div>
    )
}

export default Metas;