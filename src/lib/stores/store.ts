/** @format */

import { writable } from "svelte/store";

interface CustomStoreState {
  payload: {
    count: number;
    message: string;
  };
  reset: () => void;
  subscribe: () => void;
}

interface Payload {
  count: number;
  message: string;
}

interface CustomStore {
  set: (value: Payload) => void;
  update: (updater: (value: Payload) => Payload) => void;
  reset: () => void;
  subscribe: (run: (value: Payload) => void) => () => void;
}

function createCustomStore(initialValue: Payload): CustomStore {
  const { subscribe, set, update } = writable<Payload>(initialValue);

  console.log(typeof initialValue);
  const reset = () => {
    set({ count: 0, message: "" });
  };

  return {
    set,
    update,
    reset,
    subscribe,
  };
}

export const customStore = createCustomStore({
  count: 0,
  message: "Hello",
});
