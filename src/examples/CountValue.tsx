import { useExternalValue } from "../x-state";
import { countStore } from "./countStore";

function CountValue() {
  const count = useExternalValue(countStore);
  return (
    <div style={{ fontSize: '25px', fontWeight: 500, marginBottom: '20px' }}>
      {`count is ${count}`}
    </div>
  )
}
export default CountValue;
