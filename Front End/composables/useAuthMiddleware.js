import { useAuthStore } from "~/stores/auth";

export function useAuthMiddleware() {
  const authStore = useAuthStore();

  // Middleware to protect routes that require authentication
  function requireAuth() {
    const route = useRoute();

    // Initialize auth from localStorage if needed (client-side only)
    if (process.client && !authStore.token) {
      authStore.initializeAuth();
    }

    // If user is not authenticated, redirect to login
    if (!authStore.isAuthenticated) {
      return navigateTo({
        path: "/login",
        query: { redirect: route.fullPath },
      });
    }
  }

  // Middleware for routes that should not be accessible when authenticated
  function guestOnly() {
    // Initialize auth from localStorage if needed (client-side only)
    if (process.client && !authStore.token) {
      authStore.initializeAuth();
    }

    // If user is authenticated, redirect to home
    if (authStore.isAuthenticated) {
      return navigateTo("/");
    }
  }

  return {
    requireAuth,
    guestOnly,
  };
}
