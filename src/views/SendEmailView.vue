<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">Send Email</h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0">
        <SendEmailForm />
      </div>
    </div>
  </main>
</template>

<script setup>
import SendEmailForm from "../components/SendEmailForm.vue";
</script>
