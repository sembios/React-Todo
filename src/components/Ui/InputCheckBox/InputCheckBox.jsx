import React from 'react'
import style from './Checkbox.module.scss'

export default function InputCheckBox({onClick}) {
    return (
        <input className={style.box} type="checkbox" 
        onClick={onClick}
        />
    )
}
