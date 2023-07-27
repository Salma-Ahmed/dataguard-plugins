<template>
  <div class="tab-content p-5" id="nav-tabContent">
    <PluginsListComponent :pluginsList="pluginsList" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PluginsListComponent from './PluginsListComponent.vue'
export default {
  components: { PluginsListComponent },

  computed: {
    ...mapGetters({ pluginsList: 'getPluginsList' })
  }
}
</script>
<style scoped>
.tab-content {
  flex-basis: 80%;
}
</style>
