<script setup lang="ts">
import { company } from '@/constants/company'
import LegalPage from '@/components/LegalPage.vue'
</script>

<template>
  <LegalPage title="Контакты">
    <p>
      По вопросам работы сервиса Check Auto, оплаты и возврата денежных средств
      обращайтесь по указанным контактам.
    </p>

    <h2>Связь</h2>
    <ul>
      <li>
        Телефон:
        <a :href="company.phoneHref" class="text-brand hover:underline">{{
          company.phone
        }}</a>
      </li>
      <li>
        Email:
        <a :href="company.emailHref" class="text-brand hover:underline">{{
          company.email
        }}</a>
      </li>
    </ul>

    <h2>Реквизиты</h2>
    <ul>
      <li>{{ company.legalName }}</li>
      <li>ИНН {{ company.inn }}</li>
      <li>ОГРН {{ company.ogrn }}</li>
      <li>КПП {{ company.kpp }}</li>
      <li>Юридический адрес: {{ company.address }}</li>
      <li>Генеральный директор: {{ company.director }}</li>
    </ul>
  </LegalPage>
</template>
