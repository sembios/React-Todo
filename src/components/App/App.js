
import Header from '../Header/Header';
import style from '../App/App.module.scss'
import Input from '../Ui/Input/Input';
import Button from '../Ui/Button/Button';
import { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import Modal from '../Modal/Modal';
function App() {
  
const [inpValue, setInpValue] = useState('')
const [task, setTask] = useState([])
const [modal, setModal] = useState(false)
const [reTask, setReTask] = useState({})

// function changeMainInput (event) {
//     setInpValue(event)
//   }

function saveDataMain () {
  if (inpValue) {
    const newObj = {
      id: Date.now(),
      title: inpValue,
      status: false
    }
    setTask([...task, newObj])
    setInpValue('')
  } else alert ('Заполните поле')
}

function taskDelete (id) {
  setTask(task.filter(item => item.id !== id))
}

function changeStatus (id) {
  let newTask = task.map(item => {
    if(item.id === id) {
      item.status = !item.status
    }
    return item
  })
  setTask(newTask)
  console.log(newTask);
}

function changeTask (index) {
  setModal(!modal)
  setReTask(task[index])
}

function saveNewTask (newTask) {
  const newObj = task.map(item => {
    if(item.id === newTask.id) {
      return newTask
    }
    return item
  })
  setTask(newObj)
  setModal(!modal)
}

  return (
    <>
    <Header />
    <div className={style.container}>
      <div>
      <Input
      value={inpValue}
      onChange={e => setInpValue(e.target.value)}
      />
      <Button
      onClick={saveDataMain}
      >Сохранить</Button>
      </div>
    <TaskList 
    taskDelete={taskDelete}
    task={task}
    changeStatus={changeStatus}
    changeTask={changeTask}
    />
    </div>
    {
      modal ?
      <Modal reTask={reTask}
      saveNewTask={saveNewTask}
      />
      : null
    }
    </>
  );
}

export default App;
