import { useAuthStore } from "~/stores/auth";
import { getBaseURL } from "./helpers";
import { useCartStore } from "~/stores/cart";
import { useWishlistStore } from "~/stores/wishlist";

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();

  // Login function
  async function login(credentials) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const res = await $fetch(`${getBaseURL()}/auth/login`, {
        method: "POST",
        body: credentials,
      });

      authStore.setUser(res.user);
      authStore.setToken(res.token);

      // Redirect to home or dashboard
      router.push("/");
      return true;
    } catch (error) {
      authStore.setError(error.message || "Failed to login");
      return false;
    } finally {
      authStore.setLoading(false);
    }
  }

  // Signup function
  async function signup(credentials) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const baseURL = getBaseURL();

      const res = await $fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        body: credentials,
      });

      authStore.setUser(res.user);
      authStore.setToken(res.token);

      // Redirect to home or dashboard
      router.push("/");
      return true;
    } catch (error) {
      authStore.setError(error.message || "Failed to create account");
      return false;
    } finally {
      authStore.setLoading(false);
    }
  }

  // Logout function
  function logout() {
    // localStorage.removeItem("cart_items");
    // localStorage.removeItem("wishlist");

    const cartStore = useCartStore();
    cartStore.clearCart();

    const wishlistStore = useWishlistStore();
    wishlistStore.clearWishlist();

    authStore.clearAuth();
    router.push("/");
  }

  // Check if user is logged in (can be used in middleware)
  function checkAuth() {
    return authStore.isAuthenticated;
  }

  // Get current user
  function getUser() {
    return authStore.user;
  }

  // Update user profile
  async function updateProfile(updates) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const baseURL = getBaseURL();
      const token = authStore.token;

      const res = await $fetch(`${baseURL}/user/profile`, {
        method: "PUT",
        body: updates,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update local user data
      authStore.setUser({
        ...authStore.user,
        ...updates,
      });

      return res.user;
    } catch (error) {
      authStore.setError(error.message || "Failed to update profile");
      throw error;
    } finally {
      authStore.setLoading(false);
    }
  }
  // Forget Password function
  async function forgetPassword(email) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const res = await $fetch(`${getBaseURL()}/auth/forgetpassword`, {
        method: "POST",
        body: { email },
      });

      return res; // { message: "Password reset link sent" }
    } catch (error) {
      authStore.setError(error.message || "Failed to send reset link");
      throw error;
    } finally {
      authStore.setLoading(false);
    }
  }
  async function resetPassword(token, newPassword) {
    authStore.setLoading(true);
    authStore.setError(null);
    try {
      const response = await fetch(
        `${getBaseURL()}/auth/resetpassword?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Reset failed");
      }

      return data.message;
    } catch (err) {
      authStore.setError(err.message);
      return null;
    } finally {
      authStore.setLoading(false);
    }
  }

  async function checkOldPassword(oldPassword) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const baseURL = getBaseURL();
      const token = authStore.token;

      const res = await $fetch(`${baseURL}/auth/check-old-password`, {
        method: "POST",
        body: { oldPassword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.message; // { message: "Old password is correct" }
    } catch (error) {
      authStore.setError(error.message || "Invalid password");
      throw error;
    } finally {
      authStore.setLoading(false);
    }
  }
  async function updatePassword(newPassword) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const token = authStore.token;
      const res = await $fetch(`${getBaseURL()}/auth/change-password`, {
        method: "patch",
        body: {
          newPassword,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.message;
    } catch (err) {
      authStore.setError(err.message || "Password update failed");
      throw err;
    } finally {
      authStore.setLoading(false);
    }
  }

  return {
    login,
    signup,
    logout,
    checkAuth,
    getUser,
    updateProfile,
    forgetPassword,
    resetPassword,
    checkOldPassword,
    updatePassword,
    loading: authStore.loading,
    error: authStore.error,
    isAuthenticated: authStore.isAuthenticated,
  };
}
