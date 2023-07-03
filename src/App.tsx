import './App.css'
import { useExternalState } from './x-state'
import { countStore } from './store/countStore'

function App() {
  const [count, setCount] = useExternalState(countStore);

  return (
    <>
      <h1>x-state</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Easy and Lightweight State Management for React
        </p>
      </div>
      <p className="read-the-docs">
        <a href='https://github.com/gabrielyoon7/x-state' target='_blank'>Learn x-state</a>
      </p>
    </>
  )
}

export default App
