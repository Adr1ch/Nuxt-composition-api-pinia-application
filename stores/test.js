import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => {
    return {
      message: '🍍 Message from Pinia 🍍 & Nuxt 🍍',
    }
  },
})
