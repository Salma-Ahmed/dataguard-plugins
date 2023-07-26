<script setup>
import PluginsComponent from './PluginsComponent.vue'
</script>

<template>
  <div class="tab-content p-5" id="nav-tabContent">
    <PluginsComponent title="Marketing" :isActive="true" />
    <PluginsComponent title="Finance" :isActive="false" />
    <PluginsComponent title="Personnel" :isActive="false" />
  </div>
</template>
<style scoped>
.tab-content {
  flex-basis: 80%;
}
</style>
