import uuid from 'react-uuid'

let store = {
    _state: {
        todosArr: [
            { id: uuid(), todo: 'false', compleate: false },
            { id: uuid(), todo: 'true', compleate: true }
        ]
    },

    addTodo(val) {
        let todo = {
            id: uuid(),
            todo: val,
            compleate: false
        }
        store._state.todosArr.push(todo)
        store.render(store._state)
    },
    doneTodo(elem, done) {
        elem.compleate = !done
        store.render(store._state)
        console.log(store._state.todosArr);
    },
    dellTodo(elem) {
        let elemPos = store._state.todosArr.findIndex(el => el.id === elem.id)
        store._state.todosArr.splice(elemPos, 1)
        store.render(store._state)

        console.log(store._state.todosArr);
    },
    /*render an stuff*/
    getState() {
        return this._state
    },
    render() {
        console.log(123);
    },
    rere(observer) {
        this.render = observer;
    }
}

export default store