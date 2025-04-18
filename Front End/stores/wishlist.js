// stores/wishlist.js
import { defineStore } from "pinia";
import { useAuthStore } from "./auth"; // Import auth store
import { getBaseURL } from "~/composables/helpers";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: [],
    loadingId: null,
    isLoading: false,
  }),
  actions: {
    async loadwishlistFromServer() {
      try {
        this.isLoading = true;
        const res = await $fetch(`${getBaseURL()}/wishlist`, {
          method: "get",
          ...this.getAuthHeaders(),
        });
        console.log("res.data", res.data);
        this.items = res.data.map((item) => {
          return {
            ...item,
            id: item._id,
          };
        });
        this.saveToLocalStorage(); // optional
      } catch (error) {
        console.error("Failed to load wishlist:", error);
      } finally {
        this.isLoading = false;
      }
    },
    // Helper method to get auth headers
    getAuthHeaders() {
      const authStore = useAuthStore();
      return {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      };
    },
    async toggleWishlistItem(productId) {
      try {
        this.loadingId = productId;
        await $fetch(`${getBaseURL()}/wishlist/${productId}`, {
          method: "patch",
          ...this.getAuthHeaders(),
        });
        await this.loadwishlistFromServer(); // Refresh list
      } catch (error) {
        console.error("Toggle wishlist failed:", error);
      } finally {
        this.loadingId = null;
      }
    },

    addToWishlist(product) {
      if (!this.items.find((item) => item.id === product.id)) {
        this.items.push(product);
        this.saveToLocalStorage();
      }
    },
    removeFromWishlist(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveToLocalStorage();
    },
    isInWishlist(productId) {
      return this.items.some((item) => item.id === productId);
    },
    saveToLocalStorage() {
      localStorage.setItem("wishlist", JSON.stringify(this.items));
    },
    clearWishlist() {
      this.items = [];
      this.saveToLocalStorage();
    },
    async loadwishlistFromLocalStorage() {
      if (typeof window !== "undefined") {
        // Load from server first
        await this.loadwishlistFromServer();

        // Then load from localStorage
        const stored = localStorage.getItem("wishlist");
        if (stored) {
          try {
            this.items = JSON.parse(stored);
          } catch (e) {
            console.error("Invalid JSON in wishlist:", e);
            localStorage.removeItem("wishlist");
          }
        }
      }
    },
  },
});
