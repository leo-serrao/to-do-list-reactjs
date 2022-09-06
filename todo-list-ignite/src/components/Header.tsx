import style from './Header.module.css'
import Logo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <div className={style.header}>
      <img src={Logo} alt="Logotipo To-do List" />
    </div>
  )
}
