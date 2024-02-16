import styles from './Treinos.module.css'


export default function ModalTreinos({isOpen, setModalOpen}) {


    if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.botao}>
            <button className={styles.close} onClick={setModalOpen}>✖</button>

            <div className={styles.inputs}>

                <h1>Montar novo treino</h1>

            <input placeholder='titulo'></input>

            <input placeholder='Exercicio'></input><input type="number" placeholder='series'></input><input type="number" placeholder='repetições'></input>

            <button onClick="salvar()" className={styles.salvar}>Salvar</button>

            </div>
          </div>
        </div>
      </div>
          )
    }
return null

 
}
