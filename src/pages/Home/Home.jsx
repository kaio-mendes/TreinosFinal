import styles from './Home.module.css';
//import  {useState}  from  'react' ; 
//instalar biblioteca date-fns e dependecias
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

function Home() {   
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000); // Atualiza a data a cada segundo
    
        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
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
</div>
);
}

export default Home;