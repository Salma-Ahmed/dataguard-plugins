<template>
  <main>
    <div class="main-wrapper d-flex align-items-start">
      <TabNavComponent :tabsData="tabsData" />
      <TabContentComponent />
    </div>
  </main>
</template>
<script>
import TabContentComponent from '../components/TabContentComponent.vue'
import TabNavComponent from '../components/TabNavComponent.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { TabContentComponent, TabNavComponent },
  methods: {
    ...mapActions({
      getTabsData: 'getTabsData',
      getPluginsList: 'getPluginsList'
    }),
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  computed: {
    ...mapGetters({
      activeTab: 'getActiveTab',
      tabsData: 'getTabsData'
    })
  },
  mounted() {
    this.getTabsData()
    this.getPluginsList()
    if (this.$route.name !== this.activeTab.toLowerCase()) {
      this.$store.commit('setActiveTab', this.capitalizeFirstLetter(this.$route.name))
    }
  }
}
</script>
<style scoped>
.main-wrapper {
  height: 100vh;
}
</style>
