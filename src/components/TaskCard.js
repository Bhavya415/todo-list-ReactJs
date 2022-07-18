import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TaskCard = (props) =>{
    const {id,taskNumber,Title,task}=props.task;
    return (
        <div>
            <br/>
                <Card text='dark'>
                <Card.Header>Todo {taskNumber}</Card.Header>
                <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                {task}
                </Card.Text>
                <Button variant="primary"  onClick={() => props.clickHander(id)}>Delete</Button>{' '}
                {/* <link to={`/edit`}></link><Button variant="warning">update</Button> */}
                </Card.Body>
                </Card>
      </div>
    );
        

};

export default TaskCard;