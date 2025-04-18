import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null);
  const token = ref(null);
  const isAuthenticated = computed(() => !!user.value);
  const loading = ref(false);
  const error = ref(null);

  // Helper to check if code is running in browser
  const isBrowser = typeof window !== "undefined";

  // Actions
  function setUser(newUser) {
    user.value = newUser;
    if (isBrowser) {
      localStorage.setItem("auth_user", JSON.stringify(newUser));
    }
  }

  function setToken(newToken) {
    token.value = newToken;
    if (isBrowser) {
      if (newToken) {
        localStorage.setItem("auth_token", newToken);
      } else {
        localStorage.removeItem("auth_token");
      }
    }
  }

  function setError(message) {
    error.value = message;
  }

  function setLoading(status) {
    loading.value = status;
  }

  function clearAuth() {
    user.value = null;
    token.value = null;
    if (isBrowser) {
      localStorage.removeItem("auth_user");
      localStorage.removeItem("auth_token");
    }
  }

  // Initialize from localStorage
  function initializeAuth() {
    if (isBrowser) {
      const storedUser = localStorage.getItem("auth_user");
      const storedToken = localStorage.getItem("auth_token");
      if (storedUser) {
        try {
          user.value = JSON.parse(storedUser);
        } catch (e) {
          console.error("Error parsing stored user data:", e);
          localStorage.removeItem("auth_user");
        }
      }
      if (storedToken) {
        token.value = storedToken;
      }
    }
  }

  return {
    // State
    user,
    token,
    isAuthenticated,
    loading,
    error,

    // Actions
    setUser,
    setToken,
    setError,
    setLoading,
    clearAuth,
    initializeAuth,
  };
});
