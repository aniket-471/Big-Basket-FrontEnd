
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState(
    [ 
    {
    id:1,
    text:"doctors Appointment",
    day:'Oct 2022 at 2:00pm',
    reminder:true,
},
{
    id:2,
    text:"Meeting at School",
    day:'Oct 2022 at 9:00am',
    reminder:true,
},
{
    id:3,
    text:"Market",
    day:'Oct 2022 at 6:00pm',
    reminder:false,
},
]
)
//Add task
const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id, ...task}
  setTasks([...tasks,newTask])
}
//delete task

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>
    task.id!==id
  ))
}
//Toggle reminder
const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task)=>
      task.id===id?{...task,reminder:
        !task.reminder}:task
    )
  )
}
//Show task
const showTask=()=>{
  setShowAddTask(!showAddTask)
}
    return (
      <div className="container">
        <Header onAdd={showTask} showAdd={showAddTask}/>
        {showAddTask &&
        <AddTask onAdd={addTask}/>}
        {tasks.length>0?(
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle= {toggleReminder}/>
        ):(
          'Just Chill !!'
        )
        }
      </div>
        
    )
}

export default App;
