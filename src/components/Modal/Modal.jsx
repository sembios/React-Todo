import React, { useState } from 'react'
import Button from '../Ui/Button/Button'
import Input from '../Ui/Input/Input'
import style from './Modal.module.scss'

export default function Modal({reTask, saveNewTask}) {
    const [value, setValue] = useState (reTask)

    function reInpTask (e) {
        const newObj = {...value}
        newObj.title = e.target.value
        setValue(newObj);
    }

    function handleClick () {
        saveNewTask(value);
    }
    return (
        <div className={style.mainModal}>
            <div className={style.ntModal}>
                <div>
                    <Button>❌</Button>
                    <Input 
                    value={value.title}
                    onChange={reInpTask}
                    />
                    <Button onClick={handleClick}>Save</Button>
                </div>
            </div>
        </div>
    )
}
