import { useCartStore } from '~/stores/cart';

export default defineNuxtPlugin({
  name: 'cart-plugin',
  setup() {
    const cartStore = useCartStore();

    // Run initialization only on client-side
    if (process.client) {
      cartStore.loadCartFromLocalStorage();
    }
  }
});
