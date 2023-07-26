<script setup>
import NavTabComponent from './NavTabComponent.vue'
</script>

<template>
  <div class="nav flex-column py-5 h-100" id="nav-tab" role="tablist" aria-orientation="vertical">
    <h5 class="mb-5 text-center">DataGuard</h5>
    <NavTabComponent title="Marketing" :isActive="true" />
    <NavTabComponent title="Finance" :isActive="false" />
    <NavTabComponent title="Personnel" :isActive="false" />
  </div>
</template>
<style scoped>
.nav {
  flex-basis: 20%;
  background-color: var(--vt-c-text-dark-2);
  height: 100%;
}
</style>
