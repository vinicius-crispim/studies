
import { useState } from 'react';
import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style from './App.module.scss'
import { Tarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setTarefaSelecionada(tarefaSelecionada);
    setTarefas(prev => prev.map((tarefa) => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (tarefaSelecionada) {
      setTarefas(prev => prev.map(tarefa => {
        if (tarefa.id === tarefaSelecionada.id) {
          setTarefaSelecionada(undefined);
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Formulario
        setTarefas={setTarefas}
      />
      <Cronometro
        finalizarTarefa={finalizarTarefa}
        tarefaSelecionada={tarefaSelecionada}
      />
    </div>
  );
}

export default App;
