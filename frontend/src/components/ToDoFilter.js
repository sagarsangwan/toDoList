import React from 'react'

function ToDoFilter({ filterToDo, setFilterToDo }) {
    const optionHandler = (event) => {
        const todoValue = (event.target.value)
        if (event.target.value === "all") {
            setFilterToDo(todoValue)

        }
        if (event.target.value === "completed") {
            setFilterToDo(todoValue)
        };
        if (event.target.value === "notCompleted") {
            setFilterToDo(todoValue)
        }




    }
    return (
        <div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={optionHandler}>
                <option value="all" >All todos</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not completed</option>

            </select>
        </div>
    )
}


export default ToDoFilter
