<template>
  <div>
      <nav class="navbar">
          <span class="train-animate">
            <router-link to='/search'><img src="@/assets/train.png" class="animate-me"></router-link>
          </span>
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
      z-index: 1;
      height: 60px;
      position: fixed;
      width: 100%;
      background: lightblue;
  }

  .router{
      margin: 10px;
      padding: 10px;
      text-decoration: none;
      float: right;
      color: black;
      background-color: white;
  }

  .animate-me{
    margin-top: 25px;
    margin-left: 10px;
    width: 45px;
    height: 40px;
  }

  .train-animate{
    animation-duration: 5s;
    animation-name: slidein;
  }
  @keyframes slidein {
    to {
      margin-left: 60%;
      width: 100%;
    }
    from {
      margin-left: 0%;
      width: 100%;
    }
  }

  body{
      margin: 0px;
  }
</style>
