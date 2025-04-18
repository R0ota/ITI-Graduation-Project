import { useWishlistStore } from "~/stores/wishlist";

export default defineNuxtPlugin({
  name: "wishlist-plugin",
  setup() {
    const wishlistStore = useWishlistStore();

    // Run initialization only on client-side
    if (process.client) {
      wishlistStore.loadwishlistFromLocalStorage();
    }
  },
});
