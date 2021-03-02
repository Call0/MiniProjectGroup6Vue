<template>
  <div>
      <center>
        <div class="container">
            <div class="inner-container">
                <h3>Login</h3>
                <input type="text" v-model="userName" placeholder="Username" name="username" class="input-css">
                <input type="password" v-model="password" placeholder="Password" name="password" class="input-css">
                <button class="btn" @click="onsubmit">Login</button>
                <router-link to="/register" class="login-register-router">New User? Register</router-link>
                <router-link to="/home" class="login-home-router">Home</router-link>
            </div>
        </div>
      </center>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    validate () {
      if (this.userName === '') {
        return false
      } else if (this.password === '') {
        return false
      } else {
        return true
      }
    },
    onsubmit () {
      console.log('In submit')
      const obj = {
        userName: this.userName,
        password: this.password
      }
      if (this.validate()) {
        axios.post('http://10.177.68.60:8080/login', obj).then((res) => {
          console.log(res.data)
          this.$router.push('/home')
        })
      }
    }
  },
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
