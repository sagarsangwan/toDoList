import axios from "axios";
import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEdit, MdDelete } from "react-icons/md"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"


export default function ToDoList({ todos, setTodos, filterToDo }) {
    const [todo, setToDo] = useState({})
    const [show, setShow] = useState(false);

    const [todOformvalue, setToDOFormValue] = useState("");
    const handelchange = e => {
        setToDOFormValue(e.target.value);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdateToDo = (e, todo) => {
        setShow(true);
        setToDo(todo);
        setToDOFormValue(todo.task)
        const updateToDO = { ...todo, task: todOformvalue }
        console.log(updateToDO)

        // axios.patch(`http://localhost:8000/todos/${todo.id}`, updateToDO)

    }
    // handle update of form
    const handleUpdateFormTask = e => {
        e.preventDefault();
        const updateToDO = { ...todo, task: todOformvalue }
        axios.patch(`http://localhost:8000/todos/${todo.id}`, updateToDO)
            .then((res) => {
                console.log(res)
                handleClose()
            }, [])

    }


    // for deletiomn of todo
    const handleDelete = (id) => {
        const originalTodo = [...todos]
        setTodos(todos.filter(todo => todo.id !== id))
        axios.delete(`http://127.0.0.1:8000/todos/${id}`)
            .then(
                response => {
                    console.log(response)
                })
            .catch(() =>
                setTodos(originalTodo)
            )

    }

    // for marking todo ad completed or not
    const handleCompletedOrNot = (e, id, todo) => {
        if (e.target.checked) {
            console.log("checked");
            setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo))
            const updateToDO = { ...todo, completed: true }
            console.log(updateToDO)

            axios.patch(`http://localhost:8000/todos/${id}`, updateToDO)

        }
        else {
            console.log("not checked")
            setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: false } : todo))
        }

    }
    const completedToDos = todos.filter(todo => todo.completed);
    const unCompletedToDo = todos.filter(todo => todo.completed === false);

    // listgrop body
    const renderListGroupItem = (todo) => {
        return <ListGroup.Item key={todo.id} className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center" >
                <input type="checkbox" checked={todo.completed ? 'checked' : ""} onChange={(e) => handleCompletedOrNot(e, todo.id, todo)} style={{ marginRight: "12px" }} >
                    {/* {todo.completed === true ? <MdCheckBox onClick={() => handleCompletedOrNot(todo.id)} /> : <MdCheckBoxOutlineBlank onClick={() => handleCompletedOrNot(todo.id)} />} */}
                </input>
                <span style={todo.completed ? { textDecoration: 'line-through', } : {}}>{todo.task} {todo.id}</span>
            </div>
            <div >
                <MdEdit style={{ marginRight: "12px", cursor: "pointer" }} onClick={(e) => handleUpdateToDo(e, todo)} />
                <MdDelete onClick={() => handleDelete(todo.id)} style={{ marginRight: "12px", cursor: "pointer" }} />
            </div>

        </ListGroup.Item>
    }

    return (
        <div>
            {
                filterToDo === "all" && (
                    <div>
                        <ListGroup>
                            {unCompletedToDo.map(
                                renderListGroupItem
                            )}


                        </ListGroup>
                        <ListGroup>
                            {completedToDos.map(
                                renderListGroupItem
                            )}


                        </ListGroup>
                    </div>
                )}{

                filterToDo === "notCompleted" && (
                    <ListGroup>
                        {unCompletedToDo.map(
                            renderListGroupItem
                        )}


                    </ListGroup>
                )}
            {filterToDo === "completed" && (
                <ListGroup>
                    {completedToDos.map(
                        renderListGroupItem
                    )}


                </ListGroup>
            )
            }
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdateFormTask}>
                        <InputGroup className='mb-4'>
                            <FormControl value={todOformvalue} onChange={handelchange}
                            />
                            <Button type='submit'>Add</Button>
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>)
}