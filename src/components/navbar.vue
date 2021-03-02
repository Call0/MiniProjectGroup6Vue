<template>
  <div>
      <nav class="navbar">
          <router-link to='/login' class="router">Login</router-link>
          <router-link to='/register' class="router" >Register</router-link>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
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
