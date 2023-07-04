import { DataObserver } from "./types";
import { useSyncExternalStore } from "react";
import StateManager from "./StateManager";

const useExternalState = <T>(store: DataObserver<T>): [T, (newState: T) => void] => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return [state, store.setState];
};
const useSetExternalState = <T>(store: DataObserver<T>): (newState: T) => void => {
  return store.setState;
};
const useExternalValue = <T>(store: DataObserver<T>): T => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return state;
};

const store = <T>(initialState: T) => {
  const stateManager = new StateManager<T>(initialState);
  return stateManager;
};

export {
  useExternalState,
  useSetExternalState,
  useExternalValue,
  store
}
