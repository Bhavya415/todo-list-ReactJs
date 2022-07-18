
import TaskCard from './TaskCard';

const TaskList=(props) => {
  // console.log(props);
  const deleteTaskhandler = (id) => {
    props.getTaskId(id);
  };
  const RenderTaskList = props.tasks.map((task)=>{
    return (
    <TaskCard
    task={task}
    clickHander={deleteTaskhandler}
    key={task.id}
    />
      );
  });
  return <div>{RenderTaskList}</div>
};

export default TaskList;