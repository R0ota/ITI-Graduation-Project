import { defineStore } from "pinia";
import { getBaseURL } from "~/composables/helpers";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [],
    loading: false,
    error: null,
  }),

  getters: {
    // Get all products
    getAllProducts: (state) => state.products,

    // Get products by category
    getProductsByCategory: (state) => (categorySlug) => {
      return state.products.filter(
        (product) => product.category === categorySlug
      );
    },

    // Get product by ID
    getProductById: (state) => (id) => {
      return state.products.find((product) => product._id === id);
    },

    // Get all categories
    getAllCategories: (state) => state.categories,

    // Get product image URL from the complex product structure
    getProductImageUrl: () => (product) => {
      return product?.colors?.[0]?.images?.[0]?.url || "";
    },
  },

  actions: {
    // Fetch all products from the backend API
    async fetchProducts() {
      if (this.products.length > 0 || this.loading) {
        return; // Return early if products are already loaded or loading
      }

      console.log("Fetching products...");
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/products?limit=1000`, {
          method: "GET",
        });

        // // Add an image key to each product
        // const modifiedProducts = response.data.map((product) => ({
        //   ...product,
        //   image: this.getProductImageUrl(product), // Use the computed property
        // }));

        this.products = response.data || [];
      } catch (error) {
        console.error("Error fetching products:", error);
        this.error = error.message || "Failed to load products";
      } finally {
        this.loading = false;
      }
    },

    async fetchCategories() {
      if (this.categories.length > 0 || this.loading) {
        return; // Return early if categories are already loaded or loading
      }

      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/category`, {
          method: "GET",
        });

        this.categories = response.data || [];
      } catch (error) {
        console.error("Error fetching categories:", error);
        this.error = error.message || "Failed to load categories";
      } finally {
        this.loading = false;
      }
    },

    // Fetch products by category
    async fetchProductsByCategory(categorySlug) {
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(
          `${getBaseURL()}/products?category=${categorySlug}`,
          {
            method: "GET",
          }
        );

        this.products = response.data || [];
      } catch (error) {
        console.error(
          `Error fetching products for category ${categorySlug}:`,
          error
        );
        this.error = error.message || "Failed to load products";
      } finally {
        this.loading = false;
      }
    },

    // Fetch a single product by ID
    async fetchProduct(id) {
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/products/${id}`, {
          method: "GET",
        });

        // // Add an image key to the product
        // const modifiedProducts = {
        //   ...response,
        //   image: this.getProductImageUrl(response), // Use the computed property
        // };

        return response.data;
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        this.error = error.message || "Failed to load product";
        throw error; // Re-throw the error for further handling
      } finally {
        this.loading = false;
      }
    },
  },
});
