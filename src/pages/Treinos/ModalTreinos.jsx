import React, { useState } from 'react';
import axios from 'axios';
import styles from './Treinos.module.css';

export default function ModalTreinos({ isOpen, setModalOpen, nome }) {
  const [exercicio, setExercicio] = useState('');
  const [serie, setSerie] = useState('');
  const [repeticao, setRepeticao] = useState('');
 
  function post() {
    const data = {
      titulo: nome,
      exercicio: exercicio,
      serie: serie,
      repeticao: repeticao
      
    }
    location.reload();
        ;

    axios.post('http://localhost:3333/treino', data)
      .then(response => {
        console.log('Dados do treino enviados com sucesso:', response.data);
        // Faça qualquer outra ação após o sucesso do POST, se necessário
      })
      .catch(error => {
        console.error('Erro ao enviar dados do treino:', error);
      });
  }

  

  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.botao}>
            <button className={styles.close} onClick={setModalOpen}>✖</button>
            <div className={styles.inputs}>
              <h1>{nome}</h1>
              <input
                placeholder='Exercicio'
                value={exercicio}
                onChange={(e) => setExercicio(e.target.value)}
              />
              <input
                type="number"
                placeholder='series'
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
              />
              <input
                type="number"
                placeholder='repetições'
                value={repeticao}
                onChange={(e) => setRepeticao(e.target.value)}
              />
              <button onClick={() => { post(); setModalOpen(false); }}  className={styles.salvar}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
