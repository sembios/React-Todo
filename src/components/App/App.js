
import Header from '../Header/Header';
import style from '../App/App.module.scss'
import Input from '../Ui/Input/Input';
import Button from '../Ui/Button/Button';
import { useState } from 'react';
import TaskList from '../TaskList/TaskList';
function App() {
  
const [inpValue, setInpValue] = useState('')
const [task, setTask] = useState([])

function changeMainInput (event) {
    setInpValue(event)
  }

function saveDataMain () {
  const newObj = {
    id: Date.now(),
    title: inpValue,
    status: false
  }
  setTask([...task, newObj])
}

function taskDelete () {
console.log('del');
}


  return (
    <>
    <Header />
    <div className={style.container}>
      <div>
      <Input
      value={inpValue}
      changeMainInput={changeMainInput}
      />
      <Button
      saveDataMain={saveDataMain}
      taskDelete={taskDelete}
      >Сохранить</Button>
      </div>
    <TaskList 
    
    task={task}/>
    
    </div>
    </>
  );
}

export default App;
