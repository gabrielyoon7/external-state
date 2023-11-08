# external-state

external-state는 쉽고 가벼운 React 상태관리 라이브러리입니다.

### 설치 방법
```
npm install external-state
```
또는
```
yarn add external-state
```

### 사용법

1. 초기 상태 값 생성하기

- 초기 상태 값은 `store()`로 생성합니다.

```tsx

import { store } from "external-state";

export const countStore = store<number>(0);
```

2. 상태 관리 훅 사용하기 : useExternalState
- `useExternalState()` 는 일반적인 `useState()` 훅과 사용법이 비슷합니다.
- recoil의 useRecoilState와 동일한 사용 방법을 가지고 있습니다.

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

3. 상태 관리 훅 사용하기 : useSetExternalState
- `useSetExternalState()`는 상태를 업데이트 하는 함수입니다.
- recoil의 useSetRecoilState와 동일한 사용 방법을 가지고 있습니다.

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

4. 상태 관리 훅 사용하기 : useExternalValue
- `useExternalValue()`는 상태를 구독 하는 함수입니다.
- recoil의 useRecoilValue와 동일한 사용 방법을 가지고 있습니다.

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

5. react가 아닌 환경에서 store를 조회/조작하기
- 한번 생성한 store는 `.getState()`메서드와 `.setState()`메서드를 사용할 수 있습니다.
- `.getState()`메서드는 호출한 시점의 최신 상태 값을 읽어옵니다.
- `.setState()`메서드는 상태 값을 업데이트 합니다.
- 이 모든 과정은 vanilla 환경에서 직접 조작이 가능하며, 리액트 바깥에서 상태를 수정하더라도 훅을 통해 store를 구독중인 모든 컴포넌트들을 정확하게 재 렌더링합니다.
- `async/await` 도 사용이 가능합니다.
- 아래와 같은 예시처럼 로직을 분리하여 재사용성을 높일 수 있습니다.

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
