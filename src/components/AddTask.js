import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/App.css'

class AddTask extends React.Component{
  state={
    taskNumber:"",
    title:"",
    task:"",
  };
  add=(e)=>{
    e.preventDefault();
    if(this.state.title === "" || this.state.task === "" ){
    alert("all the fields are mandatory!");
    return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({taskNumber:"",title:"",task:""});
  }
  render(){
  return (
    <div className='container_2'>
    <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label>Todo List</Form.Label>
        <Form.Group className="mb-3">
        <Form.Control
        type="taskNumber"
        placeholder="Enter Task number"
        value={this.state.taskNumber}
        onChange={(e)=> this.setState({taskNumber:e.target.value})}>
        </Form.Control>
      </Form.Group>

        <Form.Control 
        type="title" 
        placeholder="Enter Title"
        value={this.state.title}
        onChange={(e)=> this.setState({title:e.target.value})}>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control 
        type="task" 
        placeholder="Enter Task"
        value={this.state.task}
        onChange={(e)=> this.setState({task:e.target.value})}>
        </Form.Control>
      </Form.Group>

      
      
      <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary" onClick={this.add}  >Add</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    </Form>
    </div>
  );
}
}

export default AddTask;