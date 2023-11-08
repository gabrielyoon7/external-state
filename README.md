# external-state
external-state is an easy and lightweight React state management library.

[한국어](https://github.com/gabrielyoon7/external-state/blob/main/docs/readme-kr.md)

### Installation

```
npm install external-state
```

or

```
yarn add external-state
```

### Usage
1. Creating initial state value
- The initial state value is created using the `store()` function.

```tsx
import { store } from "external-state";

export const countStore = store<number>(0);
```


2. Using state management hook: useExternalState
- `useExternalState()` has a similar usage pattern to the react `useState()` hook.
- It has the same usage pattern as recoil's useRecoilState.

```tsx
import { useExternalState } from "external-state";

function Count() {
  const [count, setCount] = useExternalState(countStore);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  )
}

export default Count;
```

3. Using state management hook: useSetExternalState
- `useSetExternalState()` is a function used to update the state.
- It has the same usage pattern as recoil's useSetRecoilState.

```tsx
import { useSetExternalState } from "external-state";

function Count() {
  const setCount = useSetExternalState(countStore);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        increase
      </button>
    </div>
  )
}

export default Count;
```

4. Using state management hook: useExternalValue

- `useExternalValue()` is a function used to subscribe the state value.
- It has the same usage pattern as recoil's useRecoilValue.

```tsx
import { useExternalValue } from "external-state";

function Count() {
  const count = useExternalValue(countStore);

  return (
    <div>
      {count}
    </div>
  )
}

export default Count;
```

5. Accessing/Modifying the store outside of React

- Once a store is created, you can use the `.getState()` and `.setState()` methods.
- The `.getState()` method reads the latest state value at the time of invocation.
- The `.setState()` method updates the state value.
- All of this can be done directly in a vanilla environment, and even if the state is modified outside of React, all components subscribing to the store through the hook will be accurately re-rendered.
- It is also possible to use `async/await`.
- You can separate the logic for better reusability, as shown in the example below:

```tsx
export const countActions = {
  increase: () => {
    const prevCount = countStore.getState();
    countStore.setState(prevCount + 1);
  },
  decrease: () => {
    const prevCount = countStore.getState();
    countStore.setState(prevCount - 1);
  },
  increaseIfOdd: () => {
    const prevCount = countStore.getState();
    if (prevCount % 2 === 1) {
      countStore.setState(prevCount + 1);
    }
  },
  increaseAsync: async () => {
    const prevCount = countStore.getState();
    const response = await fetchCount(1)
    const amount = response.data;
    countStore.setState(prevCount + amount)
  }
}
```
