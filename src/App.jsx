import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './assets/componenet/Todolist'
import Tdoinput from './assets/componenet/Tdoinput'
import { useEffect } from 'react'

function App() {

  const [tasks, setTasks]=useState([]);
  const [listodo, setListtodo]=useState([]);
  const [error,setError]=useState();
  //this shows it will receive an array

  useEffect(() => {
    // Retrieve tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
}, []);

  let addlist=(inputext)=>{
    if(!inputext ==''){
    setListtodo([...listodo,inputext])
    setError('')
    const newTasks = [...tasks, tasks];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    }else{
      setError('Please add some task')
    }
    const newTasks = [...tasks, tasks];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
  
    //it store current and previouse value
  }

  const deletListitem=(key)=>{
    let newListTOdo=[...listodo];
    newListTOdo.splice(key,1);
    setListtodo([...newListTOdo])
  }


  return (
    <>
     <h1>Tasks</h1>
     <Tdoinput addlist={addlist} error={error} setError={setError}/>
      <h1>Lists</h1><hr/>
      {
        listodo.map((listitem,i)=>{
          return (
            <Todolist key={i} index={i} item={listitem} deletListitem={deletListitem}/>
          )
         
        })
      }
    </>
  )
}

export default App;
