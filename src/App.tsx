import "./App.css"
import { Counter } from "./features/counter/Counter"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>murilo.b.andrade@gmail.com</p>
      </header>
    </div>
  )
}

export default App
