import styles from './Navbar.module.css';
import  { useState } from 'react';


function Navbar() {
    const [activeItem, setActiveItem] = useState('inicio');
    const [menuExpandido, setMenuExpandido] = useState(false);
 
    const click = (item) =>{
        setActiveItem(item === activeItem ? null : item); 
    
    } 
    const expandirMenu = () =>{
        setMenuExpandido(!menuExpandido);
    }

// se active item for diferente de inicio entao item ficará vazio
//Códigos javascript puro nao podem ser misturados com react pq causam problemas
//React gerencia o estado e a renderização dos componentes de forma mais eficaz utilizando useState
//esta definindo que o item inicio iniciara ativado
    
        
  return (

       <>
        <nav className={`${styles.menuLateral} ${menuExpandido ? styles.expandir:''}`}>

            <div className={styles.btnExpandir} onClick={expandirMenu}>
            <i className="bi bi-list" id="btn-expand" ></i> {/*Div criada para expandir o menu essa classe é um import em index do Bootstrap*/}
            </div>

            <ul>
                <li className={`${styles.itemMenu} ${activeItem === 'inicio' ? styles.ativo : ''}`} onClick={() => click('inicio')}> {/*item inicio é o nome dado a active item, se isso for verdaeiro receberá a classe style.aticvo que executara o onClick */}
                    <a href="#">
                        <span className={styles.icon}><i className="bi bi-house"></i></span>
                        <span className={styles.txtLink}>Início</span>
                    </a>
                </li>

                <li className={`${styles.itemMenu} ${activeItem === 'treinos' ? styles.ativo : ''}`} onClick={() => click('treinos')}>
                    <a href="#">
                        <span className={styles.icon}><i className="bi bi-columns-gap"></i></span>
                        <span className={styles.txtLink}>Treinos</span>
                    </a>
                </li>

                <li className={`${styles.itemMenu} ${activeItem === 'registros' ? styles.ativo : ''}`} onClick={() => click('registros')}>
                    <a href="#">
                        <span className={styles.icon}><i className="bi bi-journal-bookmark-fill"></i></span>
                        <span className={styles.txtLink}>Registros</span>
                    </a>
                </li>

                <li className={`${styles.itemMenu} ${activeItem === 'metas' ? styles.ativo : ''}`} onClick={() => click('metas')}>
                    <a href="#">
                        <span className={styles.icon}><i className="bi bi-trophy"></i></span>
                        <span className={styles.txtLink}>Metas</span>
                    </a>
                </li>

                <li className={`${styles.itemMenu} ${activeItem === 'perfil' ? styles.ativo : ''}`} onClick={() => click('perfil')}>
                    <a href="#">
                        <span className={styles.icon}><i className="bi bi-person"></i></span>
                        <span className={styles.txtLink}>Perfil</span>
                    </a>
                </li>
            </ul>
            </nav>

</>

  )
}

export default Navbar
