// ~/stores/search.js أو search.ts
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    text: "",
  }),
  actions: {
    setText(newText) {
      this.text = newText;
    },
  },
});
