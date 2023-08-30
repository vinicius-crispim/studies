import style from './Lista.module.scss'
import Item from './Item';
import { Tarefa } from '../../types/tarefa';

interface Props{
    tarefas: Tarefa[],
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){
    console.log(tarefas)
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((t, index) =>
                (
                    <Item 
                        key={t.id}
                        tarefa={t}
                        selecionaTarefa={selecionaTarefa}
                    />
                )
                )}
            </ul>
        </aside>
    )
}

export default Lista;