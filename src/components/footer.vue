<template>
  <footer class="py-6 mt-12 text-center bg-gradient-to-r from-white to-blue-100">
    <div class="max-w-md mx-auto">
      <!-- Navigation links -->
      <nav class="flex justify-center gap-6 mb-4 text-sm text-gray-700">
        <a href="#home" @click="navStore.setActiveNav('home')" class="hover:underline">Home</a>
        <a href="#about" @click="navStore.setActiveNav('about')" class="hover:underline">About</a>
        <a href="#project" @click="navStore.setActiveNav('project')" class="hover:underline"
          >Projects</a
        >
        <a href="#contact" @click="navStore.setActiveNav('contact')" class="hover:underline"
          >Contact</a
        >
      </nav>

      <!-- Social media links -->
      <div class="flex justify-center gap-4 mt-3 mb-3">
        <a
          href="https://github.com/Iamsylvest"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
        >
          <img src="@/assets/img/github.png" alt="Github" class="w-10 h-6" />
        </a>

        <a
          href="https://www.facebook.com/share/1BAvxX26VM/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
        >
          <img src="@/assets/img/facebook.png" alt="Facebook" class="w-10 h-6" />
        </a>
        <a
          href="https://www.instagram.com/sylvesst?igsh=bTc5MGFvemVncnk5"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
        >
          <img src="@/assets/img/instagram.png" alt="Instagram" class="w-10 h-6" />
        </a>
        <br />
      </div>
      <div class="block space-y-2">
        <p class="text-gray-600 hover:underline">madelosylvest@gmail.com</p>
        <p class="text-gray-600 hover:underline">099-3011-2600</p>
        <p class="text-sm text-gray-600">© 2025 Sylvest Madelo. All rights reserved.</p>
      </div>
    </div>
    <!-- Your copyright -->
  </footer>
</template>

<script setup>
import { useNavStore } from '@/stores/navStore'

const navStore = useNavStore()
</script>
