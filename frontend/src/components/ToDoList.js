import axios from "axios";
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete } from "react-icons/md"



export default function ToDoList({ todos, setTodos }) {
    const handleDelete = (id) => {
        console.log(id)
        const originalTodo = [...todos]
        setTodos(todos.filter(todo => todo.id !== id))
        axios.delete(`http://127.0.0.1:8000/todos/${id}`)
            .then(
                response => {
                    console.log(response)
                })
            .catch(
                setTodos(originalTodo)
            )

    }
    const renderListGroupItem = (todo) => {
        return <ListGroup.Item key={todo.id} className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center">
                <span style={{ marginRight: "12px", cursor: "pointer" }}>
                    {todo.completed === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </span>
                <span>{todo.task} {todo.id}</span>
            </div>
            <div >
                <MdEdit style={{ marginRight: "12px", cursor: "pointer" }} />
                <MdDelete onClick={() => handleDelete(todo.id)} style={{ marginRight: "12px", cursor: "pointer" }} />
            </div>
        </ListGroup.Item>
    }

    return (<ListGroup>
        {todos.map(
            renderListGroupItem
        )}

    </ListGroup>)
}