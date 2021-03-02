<template>
  <div>
      <nav class="navbar">
          <span v-if="$store.getters.login">
            <button class="router" v-on:click="logout">Logout</button>
          </span>
          <span v-else>
            <router-link to='/login' class="router">Login</router-link>
            <router-link to='/register' class="router" >Register</router-link>
          </span>
      </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'navbar',
  methods: {
    ...mapActions(['setLoginAction']),
    logout () {
      console.log('logout')
      this.$store.dispatch('setLoginAction', false)
    }
  }
}
</script>

<style>
  .navbar{
      height: 60px;
      position: sticky;
      top: 0px;
      width: 100vw;
      background: ivory;
  }

  .router{
      margin: 10px;
      padding: 10px;
      text-decoration: none;
      float: right;
      color: black;
      background-color: gray;
  }

  body{
      margin: 0px;
  }
</style>
