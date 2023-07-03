import CountControllers from "./CountControllers";
import CountInput from "./CountInput";
import CountReset from "./CountReset";
import CountValue from "./CountValue";

function Count() {

  return (
    <div>
      <CountValue />
      <CountInput />
      <CountControllers />
      <CountReset />
    </div>
  )
}

export default Count;
