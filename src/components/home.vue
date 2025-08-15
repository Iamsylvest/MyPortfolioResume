<template>
  <body id="home" class="grid items-center justify-center grid-cols-1 p-12 mt-32 sm:grid-cols-2">
    <div class="relative space-y-5 sm:left-32">
      <h1 class="text-4xl font-bold text-center sm:text-left">Hi! I am Sylvest Madelo</h1>
      <p class="text-center sm:text-left">
        Aspiring Full-Stack Web Developer and recent graduate, eager to apply my skills, keep
        learning, and build impactful projects.
      </p>

      <div class="flex justify-center sm:justify-start">
        <a
          href="https://www.facebook.com/share/1BAvxX26VM/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/img/facebook.png" alt="Facebook" class="h-8 w-14" />
        </a>
        <a
          href="https://www.instagram.com/sylvesst?igsh=bTc5MGFvemVncnk5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/img/instagram.png" alt="Facebook" class="h-8 w-14"
        /></a>
      </div>

      <div class="flex justify-center duration-300 sm:justify-start">
        <a
          href="/Sylvest_Madelo_CV.pdf"
          target="_blank"
          class="flex gap-2 p-3 px-12 font-semibold text-white bg-blue-500 border-2 rounded-lg hover:border-blue-300 hover:underline text-nowrap"
        >
          View my CV
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
    </div>
    <div
      class="relative flex items-center justify-center top-12 sm:justify-start sm:translate-x-32 sm:top-0"
    >
      <img
        src="@/assets/img/profile.png"
        alt="Profile"
        class="w-full aspect-square object-cover rounded-full sm:max-w-[400px] lg:max-w-[500px]"
      />
    </div>
  </body>
</template>
<script setup>
import { ref } from 'vue'
</script>
