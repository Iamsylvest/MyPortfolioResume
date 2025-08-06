import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('nav', () => {
  const activeNav = ref('home') // define value

  const setActiveNav = (nav) => {
    activeNav.value = nav
  }
  return {
    activeNav,
    setActiveNav,
  }
})
