export const AddTodo = (data) => {
    return(
        {
            type : "ADD_TODO",
            payload : data
        }
    )
}

export const RemoveTodo = () => {
    return(
        {
            type : "REMOVE_TODO",
            payload : data
        }
    )
}