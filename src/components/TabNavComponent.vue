<template>
  <div
    class="nav flex-column py-5 h-100 position-relative"
    id="nav-tab"
    role="tablist"
    aria-orientation="vertical"
  >
    <h2 class="mb-5 text-start ps-4">Data<strong>Guard</strong></h2>
    <TabNavItemComponent
      v-for="tab in tabsData"
      :key="tab.id"
      :title="tab.title"
      @click="setActiveTab(tab.title)"
    />
    <PluginsSwitcherComponent />
  </div>
</template>
<script>
import TabNavItemComponent from './TabNavItemComponent.vue'
import PluginsSwitcherComponent from './PluginsSwitcherComponent.vue'

export default {
  components: { PluginsSwitcherComponent, TabNavItemComponent },
  props: {
    tabsData: {
      default: () => [],
      required: true
    }
  },
  methods: {
    setActiveTab(title) {
      this.$store.commit('setActiveTab', title)
    }
  }
}
</script>

<style scoped>
.nav {
  flex-basis: 20%;
  background-color: var(--vt-c-text-dark-2);
  height: 100%;
}
</style>
