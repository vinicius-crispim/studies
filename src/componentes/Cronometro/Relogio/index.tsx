import { segundosParaMinutosESegundos } from '../../../common/utils/time'
import style from './Relogio.module.scss'
import { Tarefa } from '../../../types/tarefa';

export default function Relogio({ tarefaSelecionada, tempo }: { tarefaSelecionada: Tarefa | undefined, tempo: number }) {

    const tempoConvertido = segundosParaMinutosESegundos(tempo)
    const [minutosDezena, minutosUnidade] = tempoConvertido.split(':')[0].padStart(2,"0")
    const [segundosDezena, segundosUnidade] = tempoConvertido.split(':')[1].padStart(2,"0")
    return (
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezena}</span>
            <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}