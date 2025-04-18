import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin({
  name: "auth-plugin",
  setup() {
    const authStore = useAuthStore();

    // Run initialization only on client-side
    if (process.client) {
      // Initialize auth state from localStorage on app start
      authStore.initializeAuth();
    }
  },
});
