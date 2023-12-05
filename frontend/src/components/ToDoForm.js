import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"



function ToDoForm() {
    const [name, setName] = useState("");
    const handelchange = e => {
        setName(e.target.value);
    }
    return (
        <Form>
            <InputGroup className='mb-4'>
                <FormControl placeholder='New Todo' onChange={handelchange} value={name}
                />
                <Button type='submit'>Add</Button>
            </InputGroup>
        </Form>
    )
}

export default ToDoForm
