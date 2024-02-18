import React, { useState } from 'react';
import styles from './Metas.module.css';
import axios from 'axios';

export default function Modal({ isOpen, setModalOpen }) {
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
        
        // Retornar o IMC calculado
        return { peso, imc }; 
    }

    function post() {
        const imcData = calc(); // Chama a função calc para obter os dados do IMC
        axios.post('http://localhost:3333/imc', imcData)
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
                    <h1>Calcular IMC</h1>
                    <form>
                        <input type="number" placeholder='Altura' min="0" id="height"></input>
                        <input type="number" placeholder='Peso' min="0" id="weight"></input>
                    </form>
                    <div className={styles.calc}>
                        <button type="button" onClick={calc} className={styles.calcular}>Calcular</button>
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
