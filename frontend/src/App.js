import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import axios from "axios";

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("something went")
      })
  }, [])
  return (




    <div >
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">ToDo App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
      </Container>
    </div>
  );
}

export default App;
