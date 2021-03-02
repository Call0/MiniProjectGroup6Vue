<template>
  <div>
      <center>
        <div class="container">
            <div class="inner-container">
                <h3>Login</h3>
                <form method="post" action="">
                    <input type="text" placeholder="Username" name="username" class="input-css">
                    <input type="password" placeholder="Password" name="password" class="input-css">
                    <button class="btn">Login</button>
                </form>
                <router-link to="/register" class="login-register-router">New User? Register</router-link>
            </div>
        </div>
      </center>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
  }
}
</script>

<style>
  .container{
      margin: 20px;
  }

  .inner-container{
      margin-top: 40px;
      width: 300px;
      border: 1px solid black;
      padding: 30px;
      padding-top: 0px;
  }

  .input-css{
      display: block;
      padding: 10px;
      width: 250px;
      min-width: 250px;
      margin-bottom: 20px;
      outline: none;
      border-radius: 0px;
      border: 0px;
      border-bottom: 1px solid black;
  }
  .input-css:active{
      outline: none;
  }

  .btn{
      background-color: white;
      color: black;
      padding: 10px;
      display: block;
      border: 1px solid black;
      cursor: pointer;
      margin-bottom: 20px;
  }

  .login-register-router{
      float: left;
      text-decoration: none;
      color: black;
  }
</style>
