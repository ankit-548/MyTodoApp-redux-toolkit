import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import './App.css'

function App() {

  return (
    <div>
        <div>
          <h1>Learnig State management</h1>
          <h1> using Redux-toolkit</h1>
        </div>
        <AddTodo/>
        <ListTodo/>
    </div>
  )
}

export default App
