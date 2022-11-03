import React from 'react'
import style from './Todo.module.css'


const Todo = props => {
    const doneTodo = () => {
        let elem = props.state.todosArr.find(el => el.id == props.id)
        props.doneTodo(elem, elem.compleate)
    }
    const dellTodo = () => {
        let elem = props.state.todosArr.find(el => el.id == props.id)
        props.dellTodo(elem)
    }

    return (

        <div className={style.todo}>
            {props.compleate == false ?
                <div className={style.todos} >{props.todo}</div> :
                <div className={style.todos} style={{ textDecoration: 'line-through' }}  >{props.todo}</div>
            }
            {/* <div className={style.todos}>{props.todo}</div> */}
            {/* done */}
            <input type='checkbox' checked={props.compleate} className={style.done} onChange={doneTodo} />

            <button onClick={dellTodo} className={style.dell}>&#10060;</button>{/* dell */}

        </div >
    )
}

export default Todo