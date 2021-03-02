<template>
  <div>
    <navbar/>
    <p v-if="$store.getters.login">Logged In</p>
    <p v-else>Not Logged In</p>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
  name: 'home',
  components: {
    navbar: navbar
  }
}
</script>

<style>
</style>
