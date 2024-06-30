/** @format */

import { writable } from "svelte/store";

function createCustomStore(initialValue: any) {
  const { subscribe, set, update } = writable(initialValue);

  function incrementCount() {
    update((state) => ({
      ...state,
      count: state.count + 1,
    }));
  }

  return {
    subscribe,
    set,
    update,
    incrementCount,
  };
}

export const customStore = createCustomStore({
  count: 0,
  message: "Hello",
});
