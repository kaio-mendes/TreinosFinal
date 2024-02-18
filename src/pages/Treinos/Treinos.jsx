import ModalTreinos from './ModalTreinos';
import styles from './Treinos.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Treinos() {
    const [openModal, setOpenModal] = useState(false);
    const [treinoSelecionado, setTreinoSelecionado] = useState("Treino");
    const [treinos, setTreinos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/treino')
            .then(response => {
                console.log('Dados recebidos:', response.data);
                setTreinos(response.data);  
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []); 

    const handleOpenModal = (nome) => {
        setTreinoSelecionado(nome);
        setOpenModal(true);

    };

    const handleAddTreino = (nome) => {
        setOpenModal(true);
        setTreinoSelecionado(nome);
        
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3333/treino/${id}`)
        .then(response => {
            console.log('Treino deletado do servidor:', response.data);
            // Atualiza o estado local removendo o treino pelo ID
            const updatedTreinos = treinos.filter(treino => treino.id !== id);
            setTreinos(updatedTreinos);
        })
        .catch(error => {
            console.error('Erro ao deletar treino do servidor:', error);
        });
    };

    return (
        <div className={styles.head}>
            <h1>Treinos:</h1> 
                   
            <ModalTreinos isOpen={openModal} setModalOpen={() => setOpenModal(false)} nome={treinoSelecionado}></ModalTreinos>
            <div className={styles.treinos} id="treinos">
                <div className={styles.a}>
                    <h2 className={styles.title}>Treino A</h2>
                    {treinos
                        .filter(treino => treino.titulo === 'Treino A')
                        .map((treino, index) => (
                            <div className={styles.itemTreino} key={index}>
                                <h3 className={styles.tt}>{treino.exercicio} <button className={`bi bi-trash ${styles.delete}`} onClick={() => handleDelete(treino.id)}></button></h3>
                                <p className={styles.par}>Séries: {treino.serie}</p>
                                <p className={styles.par}>Repetições: {treino.repeticao}</p>
                            </div>
                        ))
                    }
                    <button className={styles.abrir} onClick={() => handleAddTreino("Treino A")}>Adicionar</button>
                </div>
                <div className={styles.b}>
                    <h2 className={styles.title}>Treino B</h2>
                    {treinos
                        .filter(treino => treino.titulo === 'Treino B')
                        .map((treino, index) => (
                            <div className={styles.itemTreino} key={index}>
                                <h3 className={styles.tt}>{treino.exercicio} <button className={`bi bi-trash ${styles.delete}`} onClick={() => handleDelete(treino.id)}></button></h3>
                                <p className={styles.par}>Séries: {treino.serie}</p>
                                <p className={styles.par}>Repetições: {treino.repeticao}</p>
                            </div>
                        ))
                    }
                    <button className={styles.abrir} onClick={() => handleAddTreino("Treino B")}>Adicionar</button>
                </div>
                <div className={styles.c}>
                    <h2 className={styles.title}>Treino C</h2>
                    {treinos
                        .filter(treino => treino.titulo === 'Treino C')
                        .map((treino, index) => (
                            <div className={styles.itemTreino} key={index}>
                                <h3 className={styles.tt}>{treino.exercicio} <button className={`bi bi-trash ${styles.delete}`} onClick={() => handleDelete(treino.id)}></button></h3>
                                <p className={styles.par}>Séries: {treino.serie}</p>
                                <p className={styles.par}>Repetições: {treino.repeticao}</p>
                            </div>
                        ))
                    }
                    <button className={styles.abrir} onClick={() => handleAddTreino("Treino C")}>Adicionar</button>
                </div>
                <div className={styles.d}>
                    <h2 className={styles.title}>Treino D</h2>
                    {treinos
                        .filter(treino => treino.titulo === 'Treino D')
                        .map((treino, index) => (
                            <div className={styles.itemTreino} key={index}>
                                <h3 className={styles.tt}>{treino.exercicio}<button className={`bi bi-trash ${styles.delete}`} onClick={() => handleDelete(treino.id)}></button></h3>
                                <p className={styles.par}>Séries: {treino.serie}</p>
                                <p className={styles.par}>Repetições: {treino.repeticao}</p>
                            </div>
                        ))
                    }
                    <button className={styles.abrir} onClick={() => handleAddTreino("Treino D")}>Adicionar</button>
                </div>
            </div>
            <p id="data"></p>
        </div>
    );
}

export default Treinos;
