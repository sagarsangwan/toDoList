import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import axios from "axios";
import ToDoFilter from "./components/ToDoFilter";

function App() {

  const [todos, setTodos] = useState([]);

  const [filterToDo, setFilterToDo] = useState("all")
  useEffect(() => {
    axios.get("/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("something went wrong")
      })
  }, [])
  const fetctData = () => {
    axios.get("/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("something went wrong")
      })
  }
  return (
    <div >
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">ToDo App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <ToDoForm todos={todos} setTodos={setTodos} fetctData={fetctData}></ToDoForm>
        <ToDoFilter setFilterToDo={setFilterToDo}></ToDoFilter>
        <ToDoList filterToDo={filterToDo} todos={todos} setTodos={setTodos}></ToDoList>
      </Container>
    </div>
  );
}

export default App;
