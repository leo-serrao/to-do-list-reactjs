import Clipboard from '../../src/assets/clipboard.svg'
import style from './EmptyTask.module.css'

export function EmptyTask() {
  return (
    <div className={style.emptyTasks}>
      <img src={Clipboard} alt="Icone de Prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
