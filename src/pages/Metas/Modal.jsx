//import React from 'react'
import styles from './Metas.module.css'
function calc() {
    var altura = parseFloat(document.getElementById("height").value);
    var peso = parseFloat(document.getElementById("weight").value);
    var imc = peso / (altura * altura);
    imc = Math.round(imc * 100) / 100;
  
    if (isNaN(imc)) {
      document.getElementById("res").innerHTML = "Não é um número";
    } else {
      document.getElementById("imc").innerHTML = "Seu IMC é de: " + imc.toFixed(2);
    }
  
    if (imc <= 16.9) {
      document.getElementById("res").innerHTML = "Você está muito abaixo do peso";
    } else if (imc <= 18.4) {
      document.getElementById("res").innerHTML = "Você está abaixo do peso";
    } else if (imc <= 24.9) {
      document.getElementById("res").innerHTML = "Você está com o peso normal";
    } else if (imc <= 29.9) {
      document.getElementById("res").innerHTML = "Você está acima do peso";
    } else if (imc <= 34.9) {
      document.getElementById("res").innerHTML = "Obesidade grau I";
    } else if (imc <= 40) {
      document.getElementById("res").innerHTML = "Obesidade grau II";
    } else if (imc > 40) {
      document.getElementById("res").innerHTML = "Obesidade grau III";
    }
  }



  export default function Modal({isOpen, setModalOpen}) {

    if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.botao}>
            <button className={styles.close} onClick={setModalOpen}>✖</button>
          </div>
          <h1>Calcular IMC</h1>
          <form>
            <input type="number" placeholder='Altura' min="0" id="height"></input>
            <input type="number" placeholder='Peso' min="0" id="weight"></input>
          </form>
          <div className={styles.calc}>
            <button className={styles.calcular} onClick={calc}>Calcular</button>
          </div>
          <p id="imc"></p>
          <p id="res"></p>
        </div>
      </div>
          )
    }
return null

 
}
