<script setup>
import Nav from './components/nav.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Project from './components/project.vue'
import Contact from './components/contact.vue'
import Footer from './components/footer.vue'
import { ref, onMounted } from 'vue'

// These are "references" to your HTML sections like Home, About, etc.
// You use these to interact with those parts of the page in JavaScript.
const homeRef = ref(null)
const aboutRef = ref(null)
const projectRef = ref(null)
const contactRef = ref(null)

// These are booleans to keep track of whether each section is currently visible on screen
const homeVisible = ref(false)
const aboutVisible = ref(false)
const projectVisible = ref(false)
const contactVisible = ref(false)

onMounted(() => {
  // This sets up an "Intersection Observer"
  // It watches if elements (like your sections) appear on screen when scrolling
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // When a section enters the screen, update its visibility to true
        // When it leaves the screen, update it to false
        if (entry.target === homeRef.value) {
          homeVisible.value = entry.isIntersecting
        } else if (entry.target === aboutRef.value) {
          aboutVisible.value = entry.isIntersecting
        } else if (entry.target === projectRef.value) {
          projectVisible.value = entry.isIntersecting
        } else if (entry.target === contactRef.value) {
          contactVisible.value = entry.isIntersecting
        }
      })
    },
    {
      threshold: 0.2, // Only trigger when 20% of the section is visible
    },
  )

  // This tells the observer which elements (sections) to watch
  if (homeRef.value) observer.observe(homeRef.value)
  if (aboutRef.value) observer.observe(aboutRef.value)
  if (projectRef.value) observer.observe(projectRef.value)
  if (contactRef.value) observer.observe(contactRef.value)
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
