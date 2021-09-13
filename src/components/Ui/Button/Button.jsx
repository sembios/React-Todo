import React from 'react'
import style from './Button.module.scss'
export default function Button({children, saveDataMain, taskDelete}) {
    return (
        <button className={style.myBtn}
        onClick={saveDataMain}
        // onClick={taskDelete}
        >{children}</button>
    )
}
