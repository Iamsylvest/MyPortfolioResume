<script setup>
import Nav from './components/nav.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Project from './components/project.vue'
import Contact from './components/contact.vue'
import Footer from './components/footer.vue'
import { ref, onMounted } from 'vue'

// Refs to hold DOM elements for each section
const homeRef = ref(null)
const aboutRef = ref(null)
const projectRef = ref(null)

// Refs to control visibility for transition effects
const homeVisible = ref(false)
const aboutVisible = ref(false)
const projectVisible = ref(false)

onMounted(() => {
  // Create an IntersectionObserver to track when sections enter the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Check which section is currently intersecting and update visibility
        if (entry.target === homeRef.value) {
          homeVisible.value = entry.isIntersecting
        } else if (entry.target === aboutRef.value) {
          aboutVisible.value = entry.isIntersecting
        } else if (entry.target === projectRef.value) {
          projectVisible.value = entry.isIntersecting // ✅ Fixed assignment
        }
      })
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    },
  )

  // Start observing each section if it's available
  if (homeRef.value) observer.observe(homeRef.value)
  if (aboutRef.value) observer.observe(aboutRef.value)
  if (projectRef.value) observer.observe(projectRef.value) // ✅ Fixed: observe projectRef
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

  <div>
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
