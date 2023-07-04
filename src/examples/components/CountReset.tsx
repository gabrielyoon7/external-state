import { useSetExternalState } from "../../lib/x-state";
import { countStore } from "../countStore.ts";

/**
 * useSetExternalState
 */
function CountReset() {
  const setCount = useSetExternalState(countStore);
  return (
    <div>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default CountReset;
