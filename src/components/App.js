import React, { useState,useEffect} from "react";
import uuid from 'react-native-uuid';
import './App.css';
import AddTask from './AddTask';
import Header from './Header';
import TaskList from './TaskList';


function App(){
  const LOCAL_STORAGE_KEY = "tasks";
  const [tasks,setTasks]=useState([])
   const addTaskHandler=(task)=>{
    
    setTasks([...tasks,{id: uuid.v4(),...task}]);
   };

   const removeTaskHandler = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTaskList);
  };

    useEffect(() => {
      const retriveTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retriveTasks) setTasks(retriveTasks);
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);
  
  return(
    <div>
      <div className="center">
      <Header  fixed="top" Variant="dark" />
      </div>
      <div className='App-header'>
        <AddTask addTaskHandler={addTaskHandler}/>
          <div className='container'>
            <TaskList tasks={tasks} getTaskId={removeTaskHandler}/>
          </div>
      </div>
      
    </div>
  );

};


export default App;