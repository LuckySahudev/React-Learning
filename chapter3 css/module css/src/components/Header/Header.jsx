import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.header}>
			<h1>This is Header</h1>
			<button className={style.btn}>click me</button>
    </div>
  )
}

export default Header
