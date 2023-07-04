import { countActions } from "../countStore.ts";

/**
 * actions
 */
function CountControllers() {
  return (
    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', margin: '10px 0px 10px 0px' }}>
      <button onClick={() => countActions.increase()}>+1</button>
      <button onClick={() => countActions.decrease()}>-1</button>
      <button onClick={() => countActions.increaseIfOdd()}>+1 if odd</button>
      <button onClick={() => countActions.increaseAsync()}>sync +1</button>
    </div>
  )
}

export default CountControllers;
