import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"

import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import { Players } from "./pages/Players"

/*
redux criar store
depois chamar o provider
usar o hook useSelector para passar as info

*/
function App() {
  return (
    <ReduxProvider store={store}>
      <Players />
    </ReduxProvider>
  )
}

export default App
