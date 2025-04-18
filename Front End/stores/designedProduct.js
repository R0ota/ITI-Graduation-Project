import { defineStore } from "pinia";
import { getBaseURL } from "~/composables/helpers";

export const usedesignedProductsStore = defineStore("designedproducts", {
  state: () => ({
    designedproducts: [],
    categories: [],
    loading: false,
    error: null,
  }),

  getters: {
    // Get all products
    getAlldesignedProducts: (state) => state.designedproducts,

    // Get product by ID
    getdesignedProductById: (state) => (id) => {
      return state.designedproducts.find((product) => product._id === id);
    },
  },

  actions: {
    // Fetch all products from the backend API
    async fetchdesignedProducts(filter = {}) {
      if (this.loading) {
        return;
      }

      let filterString = "";
      if (filter.categoryId) {
        filterString += `&category=${filter.categoryId}`;
      }

      console.log("Fetching designedproducts...");
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(
          `${getBaseURL()}/designed-product?limit=1000${filterString}`,
          {
            method: "GET",
          }
        );

        this.designedproducts = response.data?.data || [];
        return this.designedproducts;
      } catch (error) {
        console.error("Error fetching designedproducts:", error);
        this.error = error.message || "Failed to load products";
      } finally {
        this.loading = false;
      }
    },

    // Fetch a single product by ID
    async fetchdesignedProduct(id) {
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(
          `${getBaseURL()}/designed-product/${id}`,
          {
            method: "GET",
          }
        );

        return response.data;
      } catch (error) {
        console.error(`Error fetching designedproduct with ID ${id}:`, error);
        this.error = error.message || "Failed to load product";
        throw error; // Re-throw the error for further handling
      } finally {
        this.loading = false;
      }
    },
  },
});
