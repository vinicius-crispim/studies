import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { Tarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props{
    tarefaSelecionada: Tarefa | undefined,
    finalizarTarefa: () => void
} 

export default function Cronometro({ tarefaSelecionada, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState(Number);
    useEffect(() => {
        if (tarefaSelecionada?.tempo) {
            setTempo(tempoParaSegundos(tarefaSelecionada?.tempo))
        }
    }, [tarefaSelecionada])

    function regressiva(contador:number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio 
                    tarefaSelecionada={tarefaSelecionada}
                    tempo={tempo}
                />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Iniciar
            </Botao>
        </div>
    )
}