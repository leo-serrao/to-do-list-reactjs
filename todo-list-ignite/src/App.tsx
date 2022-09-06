import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent } from 'react'
import { Task } from './components/Task'
import { EmptyTask } from './components/EmptyTask'

import style from './App.module.css'
import './global.css'

export default function App() {
  const [newInputText, setInputText] = useState('')
  const [tasks, setTask] = useState<string[]>([])
  const [finishedTasks, setFinishedTasks] = useState(0)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value)
    console.log(newInputText)
  }

  function handleAddTask() {
    const task = [...tasks]

    newInputText !== '' ? setTask([...task, newInputText]) : setInputText('')
  }

  function handleDeleteTask(passedTask: String) {
    const tasksWhitOutDeletedOne = tasks.filter(task => {
      return task !== passedTask
    })

    setTask([...tasksWhitOutDeletedOne])
  }

  function handleFinishedTask(task: boolean) {
    if (task === true) {
      setFinishedTasks(finishedTasks - 1)
    } else if (task === false) {
      setFinishedTasks(finishedTasks + 1)
    }
  }

  return (
    <div className={style.App}>
      <Header />
      <div className={style.wrapper}>
        <div className={style.addTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newInputText}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>
            Criar <PlusCircle className={style.plusCircle} size={18} />
          </button>
        </div>

        <main>
          <header>
            <div className={style.createdTasks}>
              <p>Tarefas Criadas</p>
              <div className={style.createdCounter}>
                <span>{tasks.length}</span>
              </div>
            </div>

            <div className={style.finishedTasks}>
              <strong>Concluídas</strong>
              <div className={style.finishedCounter}>
                <span>
                  {finishedTasks} de {tasks.length}
                </span>
              </div>
            </div>
          </header>

          <div className={style.taskContent}>
            {tasks.length !== 0 ? (
              tasks.map(task => {
                return (
                  <Task
                    task={task}
                    onDeleteTask={handleDeleteTask}
                    onCheckTask={handleFinishedTask}
                  />
                )
              })
            ) : (
              <EmptyTask />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
