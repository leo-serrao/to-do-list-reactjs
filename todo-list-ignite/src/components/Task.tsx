import style from './Task.module.css'
import { Trash, Check } from 'phosphor-react'
import { useState } from 'react'

interface TaskProps {
  task: string
  onDeleteTask: (task: string) => void
  onCheckTask: (task: boolean) => void
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
  const [check, setCheck] = useState(false)

  function handleCheck() {
    if (check === false) {
      setCheck(true)
    } else if (check === true) {
      setCheck(false)
    }
  }

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  function handleCheckTask() {
    onCheckTask(check)
  }

  return (
    <div className={style.taskWrapper}>
      <div className={style.checkWrapper}>
        <label
          className={
            check === true
              ? style.checkBoxLabelChecked
              : style.checkBoxLabelUnchecked
          }
        >
          <input
            type="checkbox"
            id="checkbox"
            onClick={handleCheck}
            onChange={handleCheckTask}
          />
          <span className={check === true ? style.checked : style.unchecked}>
            <Check />
          </span>
        </label>

        <p className={check === true ? style.checkedTask : style.task}>
          {task}
        </p>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
