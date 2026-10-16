<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
    <p class="font-display text-6xl font-extrabold text-brand">404</p>
    <h1 class="mt-3 font-display text-2xl font-bold text-ink-heading">
      Страница не найдена
    </h1>
    <p class="mt-2 max-w-md text-sm text-ink-muted">
      Возможно, ссылка устарела. Вернитесь на главную или откройте раздел контактов.
    </p>
    <div class="mt-6 flex flex-wrap justify-center gap-3">
      <RouterLink
        to="/"
        class="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        На главную
      </RouterLink>
      <RouterLink
        to="/contacts"
        class="rounded-xl border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink-heading"
      >
        Контакты
      </RouterLink>
    </div>
  </div>
</template>
