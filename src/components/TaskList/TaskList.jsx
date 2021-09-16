import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import InputCheckBox from '../Ui/InputCheckBox/InputCheckBox'
import style from './Tasklist.module.scss'
export default function TaskList({task, taskDelete, changeStatus, changeTask}) {
    return (
        <ul className={style.list}>
            {
                task.map((item, index) => (
                    <TaskItem key={item.id} item={item}>{item.title}
                    <div>
                    <InputCheckBox onClick={() => changeStatus(item.id)}/>
                    <button onClick={() => changeTask(index)}>Изменить</button>
                    <button onClick={() => taskDelete(item.id)}>Удалить</button>
                    </div>
                    </TaskItem>
                ))
            }
        </ul>
    )
}
