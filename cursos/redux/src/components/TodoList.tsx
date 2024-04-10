import { useAppSelector } from '../store'


export function TodoList() {
    const store = useAppSelector(store => {
        return store.todo
    })

    console.log(store)
    return (
        <ul>
            {store.map(todo => <li>{todo}</li>)}
            <li>fazer café</li>
            <li>estudar</li>
        </ul>
    )
}