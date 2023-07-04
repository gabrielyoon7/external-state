import { useSetExternalState } from "../../lib/external-state";
import { countStore } from "../countStore";

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
