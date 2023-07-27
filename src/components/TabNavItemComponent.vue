<template>
  <router-link :to="title.toLowerCase()">
    <button
      class="nav-link border-0 w-100 text-start d-flex align-items-center justify-content-start"
      :class="title === activeTab ? 'active' : ''"
      :id="`v-pills-${activeTab}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#v-pills-${activeTab}`"
      type="button"
      role="tab"
      :aria-controls="`v-pills-${activeTab}`"
      :aria-selected="title === activeTab"
    >
      <CurrencyExchange v-if="title === 'Finance'" />
      <CalendarCheck v-else-if="title === 'Personnel'" />
      <GridFill v-else />

      <span class="ms-2 nav-link-title">{{ title }}</span>
    </button>
  </router-link>
</template>
<script>
import CurrencyExchange from './icons/CurrencyExchange.vue'
import CalendarCheck from './icons/CalendarCheck.vue'
import GridFill from './icons/GridFill.vue'
import { mapGetters } from 'vuex'
export default {
  components: { CurrencyExchange, CalendarCheck, GridFill },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    ...mapGetters({ activeTab: 'getActiveTab' })
  }
}
</script>
<style scoped lang="scss">
button,
a {
  color: black;
  text-decoration: none;
  &.active {
    background-color: #fff;
    border-left: 3px solid darkred !important;
  }
  &:hover {
    color: black;
  }
}
.nav-link-title {
  font-size: 1.1rem;
}
</style>
