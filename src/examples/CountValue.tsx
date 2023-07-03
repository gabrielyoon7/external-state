import { useExternalValue } from "../x-state";
import { countStore } from "./countStore";

function CountValue() {
  const count = useExternalValue(countStore);
  return (
    <div style={{ fontSize: '20px', fontWeight: 700 }}>
      {`count is ${count}`}
    </div>
  )
}
export default CountValue;
