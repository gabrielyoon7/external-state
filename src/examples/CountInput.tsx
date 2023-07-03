import { useExternalState } from "../x-state";
import { countStore } from "./countStore";
import { useState } from "react"

function CountInput() {
  const [count, setCount] = useExternalState(countStore);
  const [value, setValue] = useState(0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input value={value} onChange={(e) => setValue(Number(e.target.value.replace(/\D/g, '')))} />
      <button onClick={() => setCount(count + value)}>
        increase
      </button>
    </div>
  )
}

export default CountInput;
