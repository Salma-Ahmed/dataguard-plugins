<template>
  <main>
    <div class="main-wrapper d-flex align-items-start">
      <TabNavComponent :tabsData="tabsData" />
      <TabContentComponent :key="dataKey" />
    </div>
  </main>
</template>
<script>
import TabContentComponent from '../components/TabContentComponent.vue'
import TabNavComponent from '../components/TabNavComponent.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { TabContentComponent, TabNavComponent },
  data() {
    return { dataKey: 1 }
  },
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
  },
  watch: {
    tabsData() {
      this.dataKey += 1
    }
  }
}
</script>
<style scoped>
.main-wrapper {
  height: 100vh;
}
</style>
