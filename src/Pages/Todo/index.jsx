import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AddTodo } from '../../Store/Actions'

function Todo({ todos, AddTodo }) {

    const [task, setTask] = useState("")

    const handleAddTodo = () => {
        AddTodo(task)
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

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, { AddTodo })(Todo)
