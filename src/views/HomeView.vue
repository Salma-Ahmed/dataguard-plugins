<script setup>
import NavTabContentComponent from '../components/NavTabContentComponent.vue'
import SidebarComponent from '../components/SidebarComponent.vue'
</script>

<template>
  <main>
    <div class="main-wrapper d-flex align-items-start">
      <SidebarComponent />
      <NavTabContentComponent />
    </div>
  </main>
</template>
<style scoped>
.main-wrapper {
  height: 100vh;
}
</style>
