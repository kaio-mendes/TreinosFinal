import { useState, useEffect } from 'react';
import styles from './Metas.module.css';
import Modal from './Modal';
import axios from 'axios';

function Metas({ peso }) {
    const [openModal, setOpenModal] = useState(false);
    const [imcData, setImcData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/imc')
            .then(response => {
                console.log('Dados recebidos:', response.data);
                setImcData(response.data);  
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []); 

    // Obter o último IMC inserido
    const ultimoImc = imcData[imcData.length - 1];

    return (
        <div className={styles.head}>
            <h1>Você está na página Metas</h1>
            <div className={styles.end}>
                <button className={styles.abrir} onClick={() => setOpenModal(true)}>Calcular IMC</button>
                <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                {/* Verificar se há um último IMC e exibir apenas ele */}
                {ultimoImc && (
                    <div className={styles.itemTreino}>
                        <p>IMC: {ultimoImc.imc}</p>
                        <p>Peso: {ultimoImc.peso}</p>
                    </div>
                )}
            </div>
             
        </div>
    );
}

export default Metas;
