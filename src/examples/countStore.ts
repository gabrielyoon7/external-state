import { store } from "../lib/external-state";
import { fetchCount } from "./counterAPI";

export const countStore = store<number>(0);

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
