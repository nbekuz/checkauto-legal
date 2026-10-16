<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { company } from '@/constants/company'

const route = useRoute()
const open = ref(false)

const links = [
  { to: '/', label: 'Услуги', hash: '#services' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/offer', label: 'Оферта' },
  { to: '/refund', label: 'Оплата и возврат' },
]

function close() {
  open.value = false
}

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-night/95 text-white backdrop-blur-md"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-3" @click="close">
        <img src="/logo.svg" alt="" class="h-9 w-9 object-contain" />
        <span class="font-display text-lg font-bold tracking-tight sm:text-xl">
          {{ company.brand }}
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Основная навигация">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.hash ? { path: link.to, hash: link.hash } : link.to"
          class="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          :class="isActive(link.to) && !link.hash ? 'bg-white/10 text-white' : ''"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <a
        :href="company.phoneHref"
        class="hidden rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex"
      >
        {{ company.phone }}
      </a>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 md:hidden"
        :aria-expanded="open"
        aria-label="Меню"
        @click="open = !open"
      >
        <span class="sr-only">Меню</span>
        <span class="flex flex-col gap-1.5">
          <span class="block h-0.5 w-5 bg-white" />
          <span class="block h-0.5 w-5 bg-white" />
          <span class="block h-0.5 w-5 bg-white" />
        </span>
      </button>
    </div>

    <div v-if="open" class="border-t border-white/10 bg-night-deep px-4 py-3 md:hidden">
      <nav class="flex flex-col gap-1" aria-label="Мобильная навигация">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.hash ? { path: link.to, hash: link.hash } : link.to"
          class="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
          @click="close"
        >
          {{ link.label }}
        </RouterLink>
        <a
          :href="company.phoneHref"
          class="mt-2 rounded-xl bg-brand px-3 py-2.5 text-center text-sm font-semibold"
          @click="close"
        >
          {{ company.phone }}
        </a>
      </nav>
    </div>
  </header>
</template>
