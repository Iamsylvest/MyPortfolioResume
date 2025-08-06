<template>
  <div class="p-4 sm:p-24" id="contact">
    <h1 class="text-4xl font-bold text-center sm:text-left">Contact Us</h1>

    <div class="p-4 mt-6 border rounded-xl bg-gradient-to-r from-white to-blue-100 sm:p-12">
      <div
        class="grid grid-cols-1 gap-8 border bg-white/30 backdrop-blur-md border-white/20 rounded-xl sm:grid-cols-2"
      >
        <!-- LEFT SIDE -->
        <div class="p-4 text-center sm:text-left sm:p-8">
          <h2 class="font-bold text-7xl">Let's talk!</h2>
          <p class="mt-4 text-lg text-gray-700">
            Have a question, proposal, or just want to say hello?
          </p>
          <p class="text-lg text-gray-700">
            I'd love to hear from you. Just message me and I’ll get back to you as soon as possible.
          </p>
        </div>

        <!-- RIGHT SIDE: CONTACT FORM -->
        <div class="p-4 sm:p-8">
          <form
            action="https://formsubmit.co/madelosylvest@gmail.com"
            method="POST"
            class="flex flex-col w-full max-w-md gap-4 mx-auto"
          >
            <!-- Hidden settings -->
            <input type="hidden" name="_captcha" value="false" />
            <!-- disable FormSubmit CAPTCHA -->
            <input
              type="hidden"
              name="_next"
              value="https://my-portfolio-resume-g5k7ksa74-sylvests-projects.vercel.app/?submitted=true"
            />
            <!-- redirect after submission -->
            <label for="name" class="font-semibold"> Name:</label>
            <input
              type="text"
              class="p-2 border-2 rounded-md"
              placeholder="Your name..."
              name="name"
            />

            <label for="email" class="font-semibold">Email:</label>
            <input
              id="email"
              name="email"
              placeholder="you@example.com"
              class="p-2 border-2 rounded-md"
              required
            />

            <label for="message" class="font-semibold">Message:</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your message here..."
              class="p-2 border-2 rounded-md resize-none"
              required
            ></textarea>

            <button
              type="submit"
              class="p-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import { onMounted } from 'vue'

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('submitted')) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message was sent successfully!',
    })

    // Clean the URL so it doesn't trigger again on reload
    const newUrl = window.location.origin + window.location.pathname
    window.history.replaceState({}, '', newUrl)
  }
})
</script>
