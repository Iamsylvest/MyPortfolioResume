<template>
  <div
    class="fixed top-0 z-50 flex items-center justify-center p-2 mx-auto mt-3 -translate-x-1/2 border shadow-lg rounded-xl w-96 bg-white/30 backdrop-blur-md border-white/20 left-1/2"
  >
    <!-- Top-left logo or name -->
    <div
      class="fixed left-[-330px] z-50 text-lg font-semibold top-3 bg-blue-500 text-white rounded-full p-1 border-white border-2 shadow-md"
    >
      <a href="#home" @click="handleClick('home')">Syl.</a>
    </div>
    <div
      class="absolute p-2 transition-all duration-700 bg-blue-500 border-2 border-r-2 border-white rounded-lg shadow-md cursor-pointer translate-x-96 hover:scale-105"
    >
      <a
        href="#contact"
        class="flex gap-2 font-semibold text-white"
        @click="handleClick('contact')"
      >
        Get in touch
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
    <nav class="flex items-center justify-center p-3 space-x-12">
      <a
        href="#home"
        @click="handleClick('home')"
        :class="[
          'relative inline-block group',
          navStore.activeNav === 'home' ? 'border-b-2 border-blue-500' : '',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
        .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
        1.125-1.125h2.25c.621 0 1.125.504 
        1.125 1.125V21h4.125c.621 0 1.125-.504 
        1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <div
          class="absolute z-10 px-4 py-2 mt-2 text-black transition-all duration-300 ease-in-out -translate-x-1/2 translate-y-1 bg-white border border-gray-300 shadow-lg opacity-0 rounded-xl left-1/2 top-full group-hover:opacity-100 group-hover:translate-y-0"
        >
          Home
        </div>
      </a>
      <a
        href="#about"
        @click="handleClick('about')"
        :class="[
          'relative inline-block group',
          navStore.activeNav === 'about' ? 'border-b-2 border-blue-500' : '',
        ]"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div
          class="absolute z-10 px-4 py-2 mt-2 text-black transition-all duration-300 ease-in-out -translate-x-1/2 translate-y-1 bg-white border border-gray-300 shadow-lg opacity-0 rounded-xl left-1/2 top-full group-hover:opacity-100 group-hover:translate-y-0"
        >
          About
        </div>
      </a>
      <a
        href="#project"
        @click="handleClick('project')"
        :class="[
          'relative inline-block group',
          navStore.activeNav === 'project' ? 'border-b-2 border-blue-500' : '',
        ]"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <div
          class="absolute z-10 px-4 py-2 mt-2 text-black transition-all duration-300 ease-in-out -translate-x-1/2 translate-y-1 bg-white border border-gray-300 shadow-lg opacity-0 rounded-xl left-1/2 top-full group-hover:opacity-100 group-hover:translate-y-0"
        >
          Project
        </div>
      </a>
      <a
        href="#contact"
        @click="handleClick('contact')"
        :class="[
          'group inline-block relative',
          navStore.activeNav === 'contact' ? 'border-b-2 border-blue-500' : '',
        ]"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>
        <div
          class="absolute z-10 px-4 py-2 mt-2 text-black transition-all duration-300 ease-in-out -translate-x-1/2 translate-y-1 bg-white border border-gray-300 shadow-lg opacity-0 rounded-xl left-1/2 top-full group-hover:opacity-100 group-hover:translate-y-0"
        >
          Contact
        </div>
      </a>
    </nav>
  </div>
</template>
<script setup>
import { useNavStore } from '@/stores/navStore'
import { ref, onMounted } from 'vue'

const navStore = useNavStore()

function handleClick(nav) {
  navStore.setActiveNav(nav)
}
</script>
