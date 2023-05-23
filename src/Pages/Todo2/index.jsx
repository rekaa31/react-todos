import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from '../../Store/Actions'

export default function Todo2() {

    // DEFINE HOOK DISPATCH
    const dispatch = useDispatch()

    // DEFINE HOOK SELECTOR
    const todos = useSelector((state) => state.todos)

    const [task, setTask] = useState("")

    const handleAddTodo = () => {
        dispatch(AddTodo(task))
    }

    return (
        <>
            <input type="text" onChange={(e) => setTask(e.target.value)} />

            <button onClick={() => handleAddTodo()}>
                Add
            </button>

            <ul>
                {todos.map((item, index) =>
                    <li key={`task-${index}`}>
                        {item}
                    </li>
                )}
            </ul>
        </>
    )
}
