import CountControllers from "./components/CountControllers.tsx";
import CountInput from "./components/CountInput.tsx";
import CountReset from "./components/CountReset.tsx";
import CountValue from "./components/CountValue.tsx";

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
