import { useExternalState } from "../../lib/x-state";
import { countStore } from "../countStore.ts";
import { useState } from "react"

/**
 * useExternalState
 */
function CountInput() {
  const [count, setCount] = useExternalState(countStore); // Re-rendering induced by count state
  const [value, setValue] = useState(0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input value={value} onChange={(e) => setValue(Number(e.target.value.replace(/\D/g, '')))} />
      <button onClick={() => setCount(count + value)}>
        increase amount
      </button>
    </div>
  )
}

export default CountInput;
