
import Main from './Main'
import Ad from './Ad'
import Top from './Top'
import styles from './styles.module.scss'
import React from 'react'

const Header = () => {
  return (
    <div className={styles.header}>
        <Ad />
        <Top />
        <Main />
    </div>
  )
}

export default Header