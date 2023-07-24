import { useSetExternalState } from "../../lib/external-state";
import { countStore } from "../countStore";

/**
 * useSetExternalState
 */
function CountIncrease() {
  const setCount = useSetExternalState(countStore);
  return (
    <div>
      <button onClick={() => setCount((prev)=>prev+1)}>+1</button>
    </div>
  )
}

export default CountIncrease;
