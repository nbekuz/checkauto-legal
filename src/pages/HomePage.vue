<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { company, services } from '@/constants/company'
</script>

<template>
  <div>
    <section class="relative min-h-[78vh] overflow-hidden bg-night text-white">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,119,28,0.28),transparent_45%),radial-gradient(ellipse_at_80%_70%,rgba(255,119,28,0.12),transparent_40%),linear-gradient(160deg,#1a2228_0%,#252f37_55%,#1e272f_100%)]"
      />
      <div
        class="animate-glow pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
      />
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.07]"
        style="
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.35) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
          background-size: 48px 48px;
        "
      />

      <div
        class="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20"
      >
        <p
          class="animate-fade-up mb-4 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {{ company.brand }}
        </p>
        <h1
          class="animate-fade-up-delay max-w-3xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
        >
          Выездной ремонт автомобиля там, где вы находитесь
        </h1>
        <p
          class="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Найдите мастера, согласуйте услугу и оплатите безопасно через платформу
          ООО «ЧЕК-АВТО».
        </p>
        <div class="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
          <a
            href="#services"
            class="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Смотреть услуги и цены
          </a>
          <RouterLink
            to="/contacts"
            class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/10"
          >
            Контакты
          </RouterLink>
        </div>
      </div>
    </section>

    <section id="services" class="scroll-mt-20 bg-surface py-14 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="mb-8 max-w-2xl sm:mb-10">
          <h2 class="font-display text-2xl font-bold text-ink-heading sm:text-3xl">
            Услуги и цены
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            Каталог услуг платформы Check Auto. Итоговая стоимость работ зависит от
            выбранного мастера, типа ТС и объёма работ; сервисные платежи платформы
            фиксированы.
          </p>
        </div>

        <div class="overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <div class="overflow-x-auto">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-night text-white">
                <tr>
                  <th class="px-4 py-3.5 font-semibold sm:px-5">Услуга / продукт</th>
                  <th class="px-4 py-3.5 font-semibold sm:px-5">Описание</th>
                  <th class="whitespace-nowrap px-4 py-3.5 font-semibold sm:px-5">
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in services"
                  :key="item.name"
                  class="border-t border-ink/8"
                  :class="index % 2 === 1 ? 'bg-brand-soft/40' : 'bg-white'"
                >
                  <td class="px-4 py-4 align-top font-semibold text-ink-heading sm:px-5">
                    {{ item.name }}
                  </td>
                  <td class="px-4 py-4 align-top text-ink-muted sm:px-5">
                    {{ item.description }}
                    <span v-if="item.note" class="mt-1 block text-xs text-ink/60">
                      {{ item.note }}
                    </span>
                  </td>
                  <td
                    class="whitespace-nowrap px-4 py-4 align-top font-bold text-brand sm:px-5"
                  >
                    {{ item.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p class="mt-4 text-xs text-ink-muted">
          Оплата принимается через платёжные сервисы (в том числе Robokassa). Перед
          оплатой ознакомьтесь с
          <RouterLink to="/offer" class="text-brand underline-offset-2 hover:underline"
            >публичной офертой</RouterLink
          >
          и
          <RouterLink to="/refund" class="text-brand underline-offset-2 hover:underline"
            >условиями оплаты и возврата</RouterLink
          >.
        </p>
      </div>
    </section>

    <section class="border-t border-ink/8 bg-white py-14 sm:py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 class="font-display text-2xl font-bold text-ink-heading sm:text-3xl">
              Контакты
            </h2>
            <p class="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              По вопросам оплаты, возврата и работы сервиса обращайтесь в поддержку.
            </p>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <a
              :href="company.phoneHref"
              class="rounded-2xl border border-ink/10 bg-surface px-5 py-4 transition hover:border-brand/40"
            >
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Телефон
              </p>
              <p class="mt-1 font-semibold text-ink-heading">{{ company.phone }}</p>
            </a>
            <a
              :href="company.emailHref"
              class="rounded-2xl border border-ink/10 bg-surface px-5 py-4 transition hover:border-brand/40"
            >
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Email
              </p>
              <p class="mt-1 break-all font-semibold text-ink-heading">
                {{ company.email }}
              </p>
            </a>
          </div>
        </div>

        <div
          class="mt-8 rounded-2xl border border-ink/10 bg-night px-5 py-5 text-sm text-white/80 sm:px-6"
        >
          <p class="font-semibold text-white">{{ company.legalName }}</p>
          <p class="mt-2">ИНН {{ company.inn }} · ОГРН {{ company.ogrn }}</p>
          <p class="mt-1">{{ company.address }}</p>
        </div>
      </div>
    </section>

    <section class="border-t border-ink/8 bg-surface py-12 sm:py-14">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 class="font-display text-xl font-bold text-ink-heading sm:text-2xl">
          Документы
        </h2>
        <div class="mt-5 flex flex-wrap gap-3">
          <RouterLink
            to="/offer"
            class="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-heading transition hover:border-brand hover:text-brand"
          >
            Публичная оферта
          </RouterLink>
          <RouterLink
            to="/refund"
            class="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-heading transition hover:border-brand hover:text-brand"
          >
            Условия оплаты и возврата
          </RouterLink>
          <RouterLink
            to="/privacy"
            class="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-heading transition hover:border-brand hover:text-brand"
          >
            Политика конфиденциальности
          </RouterLink>
          <RouterLink
            to="/terms"
            class="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-heading transition hover:border-brand hover:text-brand"
          >
            Пользовательское соглашение
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
