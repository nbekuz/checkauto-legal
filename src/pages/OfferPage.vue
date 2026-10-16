<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { company, services } from '@/constants/company'
import LegalPage from '@/components/LegalPage.vue'
</script>

<template>
  <LegalPage title="Публичная оферта" updated="Редакция от 16 октября 2026 г.">
    <p>
      Настоящий документ является официальным предложением (публичной офертой)
      {{ company.legalName }} (ИНН {{ company.inn }}, ОГРН {{ company.ogrn }},
      адрес: {{ company.address }}) — далее «Исполнитель» — заключить договор
      оказания услуг с любым дееспособным лицом — далее «Заказчик».
    </p>

    <h2>1. Предмет оферты</h2>
    <p>
      Исполнитель предоставляет Заказчику доступ к платформе Check Auto для поиска
      мастеров, оформления заявок на выездной ремонт/обслуживание автомобиля, а
      также приёма платежей и связанных сервисных услуг, указанных в каталоге на
      сайте и в приложении.
    </p>

    <h2>2. Акцепт оферты</h2>
    <p>
      Акцептом оферты является регистрация в сервисе и/или оплата выбранной услуги
      (в том числе через Robokassa или иной платёжный сервис). С момента акцепта
      договор считается заключённым на условиях настоящей оферты.
    </p>

    <h2>3. Перечень услуг и цены</h2>
    <p>Актуальный каталог услуг и цен:</p>
    <ul>
      <li v-for="item in services" :key="item.name">
        {{ item.name }} — {{ item.price }}
      </li>
    </ul>
    <p>
      Полное описание размещено на
      <RouterLink to="/#services" class="text-brand hover:underline"
        >главной странице</RouterLink
      >. Итоговая стоимость работ мастера может отличаться и согласовывается до
      оплаты.
    </p>

    <h2>4. Порядок оказания услуг</h2>
    <ul>
      <li>Заказчик создаёт заявку в приложении Check Auto;</li>
      <li>мастер принимает заказ и выполняет согласованные работы;</li>
      <li>
        оплата производится через платформу либо иным способом, указанным в
        интерфейсе сервиса.
      </li>
    </ul>

    <h2>5. Оплата</h2>
    <p>
      Оплата осуществляется в рублях РФ. Моментом оплаты считается поступление
      подтверждения от платёжного провайдера. Подробные условия —
      в документе
      <RouterLink to="/refund" class="text-brand hover:underline"
        >«Условия оплаты и возврата»</RouterLink
      >.
    </p>

    <h2>6. Возврат</h2>
    <p>
      Возврат денежных средств производится в случаях и порядке, установленных
      законодательством РФ и условиями оплаты и возврата.
    </p>

    <h2>7. Реквизиты Исполнителя</h2>
    <ul>
      <li>{{ company.legalName }}</li>
      <li>ИНН {{ company.inn }}</li>
      <li>ОГРН {{ company.ogrn }}</li>
      <li>КПП {{ company.kpp }}</li>
      <li>{{ company.address }}</li>
      <li>
        Тел.:
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
  </LegalPage>
</template>
