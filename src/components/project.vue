<template>
  <div class="p-24" id="project">
    <h1 class="relative mb-3 text-4xl font-bold text-center bottom-6 sm:text-left">Projects</h1>

    <div class="relative w-full max-w-xl mx-auto overflow-hidden">
      <!-- Carousel Track -->
      <div
        id="carousel"
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="flex-shrink-0 w-full">
          <div
            class="flex flex-col items-center justify-center p-6 space-y-4 transition-all duration-300 border shadow-md hover:scale-105 rounded-xl bg-white/30 backdrop-blur-md border-white/20 hover:shadow-lg"
          >
            <img :src="slide.image" :alt="slide.title" class="w-full max-w-md shadow rounded-xl" />
            <h2 class="text-2xl font-semibold">{{ slide.title }}</h2>
            <p class="max-w-md text-center text-black/80">{{ slide.description }}</p>
            <ul class="grid justify-center grid-cols-1 gap-2 text-center sm:grid-cols-3">
              <li
                v-for="(tech, idx) in slide.tech"
                :key="idx"
                class="p-2 break-words bg-blue-200 border rounded-xl"
              >
                {{ tech }}
              </li>
            </ul>
            <a :href="slide.link" target="_blank" rel="noopener noreferrer" class="w-full">
              <button
                v-if="slide.title !== 'Expenses Tracker'"
                class="w-full py-2 font-semibold text-white transition bg-blue-500 rounded-b-xl hover:bg-blue-600"
              >
                Live Demo
              </button>

              <button
                v-else
                class="w-full py-2 font-semibold text-white transition bg-blue-500 rounded-b-xl hover:bg-blue-600"
              >
                Watch Demo
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="prevSlide"
        class="absolute left-0 px-2 py-2 text-3xl -translate-y-1/2 rounded-full top-1/2 hover:bg-blue-200"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 px-2 py-2 text-3xl -translate-y-1/2 rounded-full top-1/2 hover:bg-blue-200"
      >
        ❯
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManualCarousel',
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          title: 'Memory Test Game',
          image: '/img/memorygame.jpg',
          description:
            'A simple browser game where players flip cards to match pairs. Built with HTML, CSS, and JavaScript.',
          tech: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Tailwind'],
          link: 'https://personal-projects-4h5g.vercel.app/',
        },
        {
          title: 'Photo Booth',
          image: '/img/photobooth.jpg',
          description:
            'A photobooth is a fun, self-service setup that lets users take instant photos—often with props or filters—for events or personal keepsakes.',
          tech: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Tailwind'],
          link: 'https://photobooth-ecru.vercel.app/',
        },
        {
          title: 'WeatherTeller',
          image: '/img/weather.jpg',
          description:
            'A weather web app simply shows the current weather and forecast for a chosen location.',
          tech: ['HTML', 'CSS', 'JavaScript', , 'Vue', 'Tailwind', 'openweathermap'],
          link: 'https://example.com/weather-teller',
        },
        {
          title: 'Expenses Tracker',
          image: '/img/expensesTrackerImg.jpg',
          description:
            'Simple Expenses Tracker is an intuitive web app that helps you record income and expenses quickly. View real-time totals and filter by category or date. Perfect for personal budgeting or small side projects.',
          tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Vue', 'Laravel', 'Tailwind'],
          link: 'https://youtu.be/R_zwzrrSJVA',
        },
        {
          title: 'Inventory and Tracking System',
          image: '/img/inventoryAndTracking.jpg',
          description:
            'Inventory and Tracking System – A tool to manage stock levels, track material movement, and monitor inventory changes in real time for efficient operations.',
          tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Vue', 'Laravel', 'Tailwind'],
          link: 'https://youtu.be/zecc8UF40IU',
        },
      ],
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },
  },
}
</script>
