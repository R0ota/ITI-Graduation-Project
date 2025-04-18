// stores/userStore.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),

  actions: {

    async fetchAllUsers() {
      this.loading = true
      this.error = null  
      const token = localStorage.getItem('auth_token')
      try {
        const response = await $fetch(`${getBaseURL()}/user/all`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,    
          },
        })
        this.users = response
        console.log('user', this.users);
        
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async deleteUser(id) {
      this.loading = true
      this.error = null
    //   const authStore = useAuthStore();   
      const token = localStorage.getItem('auth_token')
      try {
        await $fetch(`${getBaseURL()}/user/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,    
          },
        })
        this.users = this.users.filter(function (user) {
          return user._id !== id
        })
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
  },
})
