import CountControllers from "./components/CountControllers";
import CountInput from "./components/CountInput";
import CountReset from "./components/CountReset";
import CountValue from "./components/CountValue";

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
