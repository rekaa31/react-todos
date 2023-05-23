const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            let data = [...state, action.payload]
            return data

        // REMOVE
        
        // FILTER

        // EDIT

        // DONE
        default:
            return state
    }
}

export default TodoReducer