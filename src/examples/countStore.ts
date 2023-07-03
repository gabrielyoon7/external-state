import { store } from "../x-state";

export const countStore = store(0);

export const countActions = {
  increase: () => {
    const prevCount = countStore.getState();
    countStore.setState(prevCount + 1);
  },
  decrease: () => {
    const prevCount = countStore.getState();
    countStore.setState(prevCount - 1);
  },
}
