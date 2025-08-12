<script setup>
import Nav from './components/nav.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Project from './components/project.vue'
import Contact from './components/contact.vue'
import Footer from './components/footer.vue'
import { ref, onMounted } from 'vue'
import { useNavStore } from './stores/navStore'

const navStore = useNavStore()

// Section Refs
const homeRef = ref(null)
const aboutRef = ref(null)
const projectRef = ref(null)
const contactRef = ref(null)

// Visibility for animations
const homeVisible = ref(false)
const aboutVisible = ref(false)
const projectVisible = ref(false)
const contactVisible = ref(false)

onMounted(() => {
  // Create a new IntersectionObserver to detect when sections enter/leave the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      // Loop through each observed element's intersection change
      entries.forEach((entry) => {
        // If the element is the home section
        if (entry.target === homeRef.value) {
          // Update visibility state for home section
          homeVisible.value = entry.isIntersecting
          // If it's currently visible, set the active navigation link to "home"
          if (entry.isIntersecting) navStore.setActiveNav('home')

          // If the element is the about section
        } else if (entry.target === aboutRef.value) {
          // Update visibility state for about section
          aboutVisible.value = entry.isIntersecting
          // If it's currently visible, set the active navigation link to "about"
          if (entry.isIntersecting) navStore.setActiveNav('about')

          // If the element is the projects section
        } else if (entry.target === projectRef.value) {
          // Update visibility state for projects section
          projectVisible.value = entry.isIntersecting
          // If it's currently visible, set the active navigation link to "project"
          if (entry.isIntersecting) navStore.setActiveNav('project')

          // If the element is the contact section
        } else if (entry.target === contactRef.value) {
          // Update visibility state for contact section
          contactVisible.value = entry.isIntersecting
          // If it's currently visible, set the active navigation link to "contact"
          if (entry.isIntersecting) navStore.setActiveNav('contact')
        }
      })
    },
    {
      // Observer options:
      threshold: 0.2, // Trigger callback when at least 20% of the section is visible in the viewport
    },
  )

  // Start observing each section only if the ref exists
  if (homeRef.value) observer.observe(homeRef.value) // Watch home section
  if (aboutRef.value) observer.observe(aboutRef.value) // Watch about section
  if (projectRef.value) observer.observe(projectRef.value) // Watch project section
  if (contactRef.value) observer.observe(contactRef.value) // Watch contact section
})
</script>
<template>
  <Nav />

  <div
    ref="homeRef"
    :class="{ 'opacity-100 translate-y-0': homeVisible, 'opacity-0 translate-y-10': !homeVisible }"
    class="transition-all duration-700 ease-in-out"
  >
    <Home />
  </div>

  <div
    ref="aboutRef"
    :class="{
      'opacity-100 translate-y-0': aboutVisible,
      'opacity-0 translate-y-10': !aboutVisible,
    }"
    class="transition-all duration-700 ease-in-out"
  >
    <About />
  </div>

  <div
    ref="projectRef"
    :class="{
      'opacity-100 translate-y-0': projectVisible,
      'opacity-0 translate-y-10': !projectVisible,
    }"
    class="transition-all duration-700 ease-in-out"
  >
    <Project />
  </div>

  <div
    ref="contactRef"
    :class="{
      'opacity-100 translate-y-0': contactVisible,
      'opacity-0 translate-y-10': !contactVisible,
    }"
    class="transition-all duration-700 ease-in-out"
  >
    <Contact />
  </div>
  <div>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
