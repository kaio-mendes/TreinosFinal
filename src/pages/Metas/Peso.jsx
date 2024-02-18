import React, { useState } from 'react';
import styles from './Metas.module.css';
import axios from 'axios';

export default function Modal({ isOpen, setModalOpen }) {

    function post() {
        const imcData = calc(); // Chama a função calc para obter os dados do IMC
        axios.post('http://localhost:3333/meta', imcData)
            .then(response => {
                console.log('Dados do IMC enviados com sucesso:', response.data);
                
            })
            .catch(error => {
                console.error('Erro ao enviar dados do IMC:', error);
            });
    }

    if (isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <div className={styles.botao}>
                        <button className={styles.close} onClick={setModalOpen}>✖</button>
                    </div>
                    <h1>Qual sua meta de peso?</h1>
                    <form>
                        <input type="number" placeholder='Peso' min="0" id="weight"></input>
                    </form>
                    <div className={styles.calc}>
                        <button type="button" onClick={() => { post(); setModalOpen(false); }} className={styles.calcular}>Salvar</button>
                    </div>
                    <p id="imc"></p>
                    <p id="res"></p>
                </div>
            </div>
        )
    }

    return null;
}
