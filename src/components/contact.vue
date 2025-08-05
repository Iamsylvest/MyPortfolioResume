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
            We'd love to hear from you. Fill out the form and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <!-- RIGHT SIDE: CONTACT FORM -->
        <div class="p-4 sm:p-8">
          <form action="" class="flex flex-col w-full max-w-md gap-4 mx-auto">
            <label for="email" class="font-semibold">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              class="p-2 border-2 rounded-md"
              required
            />

            <label for="message" class="font-semibold">Message:</label>
            <textarea
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
<script></script>
