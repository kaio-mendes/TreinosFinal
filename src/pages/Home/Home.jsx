import styles from './Home.module.css';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {   
    const [currentDate, setCurrentDate] = useState(new Date());
    const [treinos, setTreinos] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000); // Atualiza a data a cada segundo
    
        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

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

    return (
        <div className={styles.container}>
            <h1>Você está na página principal</h1>
            <div className={styles.date}>
                <h1>{format(currentDate, 'HH:mm')}</h1>
                <div className={styles.day}>
                    <p>{format(currentDate, 'dd/MM/yyyy')}</p>
                </div>
            </div>



            <div className={styles.treinos}>
              <div className={styles.a}>
                <h2 className={styles.title}>Treino A</h2>
                {treinos
                    .filter(treino => treino.titulo === 'Treino A')
                    .map((treino, index) => (
                        <div className={styles.itemTreino} key={index}>
                            <h3 className={styles.tt}>{treino.exercicio}</h3>
                            <p className={styles.par}>Séries: {treino.serie}</p>
                            <p className={styles.par}>Repetições: {treino.repeticao}</p>
                        </div>
                    ))
                }
</div>
<div className={styles.b}>
                <h2 className={styles.title}>Treino B</h2>
                {treinos
                    .filter(treino => treino.titulo === 'Treino B')
                    .map((treino, index) => (
                        <div className={styles.itemTreino} key={index}>
                            <h3 className={styles.tt}>{treino.exercicio}</h3>
                            <p className={styles.par}>Séries: {treino.serie}</p>
                            <p className={styles.par}>Repetições: {treino.repeticao}</p>
                        </div>
                    ))
                }
</div>
<div className={styles.d}>
            <h2 className={styles.title}>Treino C</h2>
                {treinos
                    .filter(treino => treino.titulo === 'Treino C')
                    .map((treino, index) => (
                        <div className={styles.itemTreino} key={index}>
                            <h3 className={styles.tt}>{treino.exercicio}</h3>
                            <p className={styles.par}>Séries: {treino.serie}</p>
                            <p className={styles.par}>Repetições: {treino.repeticao}</p>
                        </div>
                    ))
                }
</div>
              <div className={styles.d}>
              <h2 className={styles.title}>Treino D</h2>
                {treinos
                    .filter(treino => treino.titulo === 'Treino D')
                    .map((treino, index) => (
                        <div className={styles.itemTreino} key={index}>
                            <h3 className={styles.tt}>{treino.exercicio}</h3>
                            <p className={styles.par}>Séries: {treino.serie}</p>
                            <p className={styles.par}>Repetições: {treino.repeticao}</p>
                        </div>
                    ))
                }
            </div>
</div>
           
           
        </div>
    );
}

export default Home;
