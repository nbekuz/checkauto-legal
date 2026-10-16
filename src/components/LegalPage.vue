<script setup lang="ts">
defineProps<{
  title: string
  updated?: string
}>()
</script>

<template>
  <div class="bg-surface py-10 sm:py-14">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <h1 class="font-display text-3xl font-bold text-ink-heading sm:text-4xl">
        {{ title }}
      </h1>
      <p v-if="updated" class="mt-2 text-sm text-ink-muted">{{ updated }}</p>
      <article class="prose-legal mt-8 rounded-2xl border border-ink/10 bg-white p-5 sm:p-8">
        <slot />
      </article>
    </div>
  </div>
</template>
