import { useSetExternalState } from "../x-state";
import { countStore } from "./countStore";

function CountReset() {
  const setCount = useSetExternalState(countStore);
  return (
    <div>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default CountReset;
