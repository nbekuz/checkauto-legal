import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/HomePage.vue'),
          meta: {
            title: 'Check Auto — выездной ремонт автомобилей',
            description:
              'Каталог услуг Check Auto, цены, контакты и реквизиты ООО «ЧЕК-АВТО».',
          },
        },
        {
          path: 'contacts',
          name: 'contacts',
          component: () => import('@/pages/ContactsPage.vue'),
          meta: {
            title: 'Контакты — Check Auto',
            description: 'Телефон, email и реквизиты ООО «ЧЕК-АВТО».',
          },
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: () => import('@/pages/PrivacyPage.vue'),
          meta: {
            title: 'Политика конфиденциальности — Check Auto',
            description: 'Политика обработки персональных данных ООО «ЧЕК-АВТО».',
          },
        },
        {
          path: 'terms',
          name: 'terms',
          component: () => import('@/pages/TermsPage.vue'),
          meta: {
            title: 'Пользовательское соглашение — Check Auto',
            description: 'Условия использования сервиса Check Auto.',
          },
        },
        {
          path: 'offer',
          name: 'offer',
          component: () => import('@/pages/OfferPage.vue'),
          meta: {
            title: 'Публичная оферта — Check Auto',
            description: 'Публичная оферта на оказание услуг ООО «ЧЕК-АВТО».',
          },
        },
        {
          path: 'refund',
          name: 'refund',
          component: () => import('@/pages/RefundPage.vue'),
          meta: {
            title: 'Условия оплаты и возврата — Check Auto',
            description: 'Порядок оплаты и возврата денежных средств Check Auto.',
          },
        },
        {
          path: ':pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/pages/NotFoundPage.vue'),
          meta: {
            title: 'Страница не найдена — Check Auto',
          },
        },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || 'Check Auto'
  const description =
    (to.meta.description as string) ||
    'Check Auto — сервис выездного ремонта автомобилей.'
  document.title = title

  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', description)
})

export default router
