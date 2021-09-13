import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import style from './Tasklist.module.scss'
export default function TaskList({task, taskDelete}) {
    return (
        <ul className={style.list}>
            {
                task.map((item, index) => (
                    <TaskItem key={item.id}>{item.title}
                    <button>Изменить</button>
                    <button onClick={taskDelete}>Удалить</button>
                    </TaskItem>
                ))
            }
        </ul>
    )
}
