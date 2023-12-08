import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete } from "react-icons/md"



export default function ToDoList({ todos = [] }) {
    const renderListGroupItem = (todo) => {
        return <ListGroup.Item key={todo.id} className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center">
                <span style={{ marginRight: "12px", cursor: "pointer" }}>
                    {todo.completed === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </span>
                <span>{todo.task}</span>
            </div>
            <div >
                <MdEdit style={{ marginRight: "12px", cursor: "pointer" }} />
                <MdDelete style={{ marginRight: "12px", cursor: "pointer" }} />
            </div>
        </ListGroup.Item>
    }

    return (<ListGroup>
        {todos.map(
            renderListGroupItem
        )}

    </ListGroup>)
}