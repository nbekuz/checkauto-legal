<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { company } from '@/constants/company'

const year = new Date().getFullYear()

const docs = [
  { to: '/offer', label: 'Публичная оферта' },
  { to: '/refund', label: 'Условия оплаты и возврата' },
  { to: '/privacy', label: 'Политика конфиденциальности' },
  { to: '/terms', label: 'Пользовательское соглашение' },
  { to: '/contacts', label: 'Контакты' },
]
</script>

<template>
  <footer class="mt-auto border-t border-white/10 bg-night text-white">
    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <RouterLink to="/" class="mb-4 inline-flex items-center gap-3">
            <img src="/logo.svg" alt="" class="h-9 w-9 object-contain" />
            <span class="font-display text-xl font-bold">{{ company.brand }}</span>
          </RouterLink>
          <p class="max-w-md text-sm leading-relaxed text-white/70">
            Платформа выездного ремонта и обслуживания автомобилей. Связываем
            автовладельцев с проверенными мастерами.
          </p>
        </div>

        <div>
          <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            Документы
          </h2>
          <ul class="space-y-2 text-sm text-white/80">
            <li v-for="doc in docs" :key="doc.to">
              <RouterLink :to="doc.to" class="transition hover:text-brand">
                {{ doc.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div id="contacts-footer">
          <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            Контакты и реквизиты
          </h2>
          <ul class="space-y-2 text-sm leading-relaxed text-white/80">
            <li class="font-semibold text-white">{{ company.legalName }}</li>
            <li>ИНН {{ company.inn }}</li>
            <li>ОГРН {{ company.ogrn }}</li>
            <li>КПП {{ company.kpp }}</li>
            <li>{{ company.address }}</li>
            <li>
              Телефон:
              <a :href="company.phoneHref" class="text-brand hover:underline">
                {{ company.phone }}
              </a>
            </li>
            <li>
              Email:
              <a :href="company.emailHref" class="text-brand hover:underline">
                {{ company.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ company.legalName }}. Все права защищены.</p>
        <p>Генеральный директор: {{ company.director }}</p>
      </div>
    </div>
  </footer>
</template>
