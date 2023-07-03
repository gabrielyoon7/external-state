import {DataObserver} from "./types.ts";

class StateManager<T> implements DataObserver<T> {
  public state: T;
  private listeners: Array<() => void> = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  setState = (newState: T) => {
    this.state = newState; // 실험결과 반드시 재할당 해야 리액트에서 변화를 감지함 ==> Object.is() 연산 동작
    this.emitChange();
  };

  getState = () => { // 값 형태를 반드시 유지해야 오류가 없음
    return this.state;
  };

  subscribe = (listener: () => void) => {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  emitChange = () => {
    for (const listener of this.listeners) {
      listener();
    }
  };
}

export default StateManager;
