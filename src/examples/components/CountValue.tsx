import { useExternalValue } from "../../lib/external-state";
import { countStore } from "../countStore.ts";

/**
 * useExternalValue
 */
function CountValue() {
  const count = useExternalValue(countStore);
  return (
    <div style={{ fontSize: '25px', fontWeight: 500, marginBottom: '20px' }}>
      {`count is ${count}`}
    </div>
  )
}
export default CountValue;
