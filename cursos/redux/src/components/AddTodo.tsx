import { FormEvent, useState } from 'react'


import {useDispatch} from 'react-redux'
import { add } from '../store'


export function AddTodo() {
    const [newTodo, setTodo] = useState("")
    const dispatch = useDispatch()
    
    function handleNewTodo(e: FormEvent){
        e.preventDefault()
        dispatch(add({newTodo}))
        console.log(newTodo)
        setTodo("")
    }

    return (
        <form onSubmit={handleNewTodo}>
            <input
                type="text"
                placeholder="novo to-do" 
                value={newTodo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}