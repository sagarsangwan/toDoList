import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"
import axios from 'axios';



function ToDoForm({ fetctData, setTodos, todos }) {
    const [name, setName] = useState("");
    const handelchange = e => {
        setName(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        const newToDo = {
            task: name
        }
        axios.post("http://127.0.0.1:8000/todos/", newToDo)
            .then((response) => {
                console.log(response);
                console.log(response.data)
                setTodos(todos => [...todos, response.data])
                fetctData()

            })
            .catch((error) => {
                console.log(error)
            })
    };
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className='mb-4'>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="New ToDO" id='inputNewToDO' name="New ToDO" onChange={handelchange} value={name} />
                    <label for="inputNewToDO" class="form__label">New Todo</label>
                </div>
                {/* <FormControl placeholder='New Todo' onChange={handelchange} value={name}
                /> */}
                <Button className='btn btn-success ms-1' type='submit'>Add</Button>
            </InputGroup>
        </Form>
    )
}

export default ToDoForm
