import React from "react"
import Botao from "../Botao"
import style from './Formulario.module.scss'
import { Tarefa } from "../../types/tarefa"
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}

function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');
    return (
        <form className={style.novaTarefa} onSubmit={(event) => {
            event.preventDefault();
            setTarefas(tarefasAntigas =>
                [
                    ...tarefasAntigas,
                    {
                        tarefa,
                        tempo,
                        selecionado: false,
                        completado: false,
                        id: uuidv4()
                    }
                ]
            )
            setTarefa('');
            setTempo('00:00');
        }}>
            <div className={style.inputContainer}>
                {/* Caso esteja usando o formato de nome de classe novaTarefa para form, novaTarefa__inputContainer
                para div e assim por diante, pode ser feito assim className={style["novaTarefa__inputContainer"]} */}
                <label htmlFor='tarefa' >Adicione um novo estudo</label>
                <input
                    type='text'
                    id='tarefa'
                    name="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>Tempo:</label>
                <input
                    type='time'
                    name='tempo'
                    id="tempo"
                    step={1}
                    min='00:00:00'
                    max='01:30:00'
                    required
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                />
            </div>
            <Botao type='submit'>
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario