import React from 'react'
import AddTodo from './AddTodo/AddTodo'
import Todos from './Todos/Todos'
import style from './TodoBody.module.css'

const TodoBody = props => {

    return (
        <div className={style.todoBody}>
            <Todos
                state={props.state}
                doneTodo={props.doneTodo}
                dellTodo={props.dellTodo}
            />
            <AddTodo
                addTodo={props.addTodo}
                state={props.state}
            />
        </div>
    )
}

export default TodoBody