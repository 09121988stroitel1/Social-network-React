import React from 'react'
import style from './AddTodo.module.css'
import { useState } from 'react';
import uuid from 'react-uuid'

const AddTodo = props => {

    const [val, setVal] = useState('');


    const changeVal = (elem) => {
        setVal(elem.target.value)
    }

    const addTodo = () => {
        props.addTodo(val)
        setVal('')
    }

    return (
        <div className={style.AddTodo}>
            <input type='text' value={val} onChange={changeVal} />
            <button onClick={addTodo}>add</button>
        </div>
    )
}

export default AddTodo