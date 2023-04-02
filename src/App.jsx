import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/Todolist'
import InputField from './components/InputField'
import { useDispatch } from 'react-redux'
import { addItem } from './store/todSlice'
import { fetchTodos } from './store/todSlice'

function App() {
  // const [todos, setTodos] = useState([])
  const [text,setText]=useState('')
  const dispatch=useDispatch()

  const addTask=()=> {
    dispatch(addItem(text))
    setText('')
  }

  useEffect(()=>{
    dispatch(fetchTodos())
  }, [dispatch])
  

  return (
    <div className="App">
      <InputField text={text} addItem={addTask} setText={setText}/>
      <TodoList />
      
    </div>
  )
}

export default App
