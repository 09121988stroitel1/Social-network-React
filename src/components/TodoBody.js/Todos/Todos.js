import React from 'react'
import style from './Todos.module.css'
import uuid from 'react-uuid'
import Todo from './Todo/Todo'

// let todosArr = [
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur1', compleate: false },
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur2', compleate: false },
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur3', compleate: false },
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur4', compleate: false },
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur5', compleate: false },
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur6', compleate: false },
//     { id: uuid(), todo: 'Lorem ipsum dolor sit amet consectetur7', compleate: false }
// ]



const Todos = props => {

    let todos = props.state.todosArr.map(elem => {
        return <Todo
            state={props.state}
            dellTodo={props.dellTodo}

            doneTodo={props.doneTodo}
            key={elem.id}
            id={elem.id}
            compleate={elem.compleate}
            todo={elem.todo}
        />
    })

    return (
        <div className={style.Todos}>
            { todos}

        </div>
    )
}

export default Todos