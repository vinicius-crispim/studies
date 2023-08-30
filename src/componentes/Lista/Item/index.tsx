import style from '../Lista.module.scss'
import { Tarefa } from '../../../types/tarefa';

interface Props {
    tarefa:Tarefa,
    selecionaTarefa:(tarefaSelecionada:Tarefa) => void
}

export default function Item({tarefa, selecionaTarefa} : Props) {
    return (
        <li className={`${style.item} ${tarefa.selecionado ? style.itemSelecionado : ''} ${tarefa.completado ? style.itemCompletado : ''}`}
        onClick={() => !tarefa.completado && selecionaTarefa(tarefa)}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
            {tarefa.completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}