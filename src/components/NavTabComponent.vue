<script setup>
import CurrencyExchange from './icons/CurrencyExchange.vue'
import CalendarCheck from './icons/CalendarCheck.vue'
import GridFill from './icons/GridFill.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <div class="d-flex align-items-center justify-content-start">
    <button
      class="nav-link border-0 w-100 text-start"
      :class="isActive ? 'active' : ''"
      :id="`v-pills-${title}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#v-pills-${title}`"
      type="button"
      role="tab"
      :aria-controls="`v-pills-${title}`"
      :aria-selected="isActive"
    >
      <CurrencyExchange v-if="title === 'Marketing'" />
      <CalendarCheck v-else-if="title === 'Personnel'" />
      <GridFill v-else />
      {{ title }}
    </button>
  </div>
</template>
<style scoped lang="scss">
button {
  color: black;
  &.active {
    background-color: #fff;
    border-left: 3px solid darkred !important;
  }
  &:hover {
    color: black;
  }
}
</style>
