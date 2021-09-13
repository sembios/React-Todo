import React from 'react'
import style from './Input.module.scss'
export default function Input({changeMainInput}) {
    return (
        <input
        className={style.inp}
        onChange={e => changeMainInput(e.target.value)}
        />
    )
}
