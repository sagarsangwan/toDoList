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
        <div className='align-items-end justify-content-end d-flex'>
            <select className="form-select  mb-3 mx_w_130 fts-12" onChange={optionHandler}>
                <option value="all" >All todos</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not completed</option>

            </select>

        </div>
    )
}


export default ToDoFilter
