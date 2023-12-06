import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


export default function ToDoList({ todos = [] }) {
    return (<ListGroup>
        {todos.map(
            todo => {

                return <ListGroup.Item key={todo.id}>{todo.task}</ListGroup.Item>
            }
        )}

    </ListGroup>)
}