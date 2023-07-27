<template>
  <div :key="tabs">
    <div
      v-for="tab in tabsData"
      :key="tab.id"
      class="tab-pane fade"
      :class="tab.title === activeTab ? 'active show' : ''"
      :id="`v-pills-${activeTab}`"
      role="tabpanel"
      :aria-labelledby="`v-pills-${activeTab}-tab`"
    >
      <p class="mb-5 plugins-title">{{ activeTab }} plugins</p>
      <div class="d-flex flex-wrap justify-content-between">
        <PluginComponent
          v-for="plugin in pluginsList"
          :key="plugin.title"
          :tab="tab"
          :plugin="plugin"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PluginComponent from './PluginComponent.vue'
export default {
  components: { PluginComponent },
  data() {
    return {
      tabs: 1
    }
  },
  props: {
    pluginsList: {
      default: () => [],
      required: true
    }
  },

  computed: {
    ...mapGetters({ activeTab: 'getActiveTab', tabsData: 'getTabsData' })
  },
  watch: {
    activeTab: function () {
      this.tabs += 1
    },
    tabsData() {}
  }
}
</script>
<style scoped>
.plugins-title {
  font-size: 1.4rem;
}
</style>
