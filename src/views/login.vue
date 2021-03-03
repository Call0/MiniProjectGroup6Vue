<template>
  <div>
      <center>
        <div class="container">
            <div class="inner-container">
                <div class="heading">
                  <h3>Login</h3>
                </div>
                <div class="content">
                  <input type="text" v-model="userName" placeholder="Username" name="username" class="input-css">
                  <input type="password" v-model="password" placeholder="Password" name="password" class="input-css">
                  <button class="btn" @click="onsubmit">Login</button>
                </div>
                <div class="footer">
                  <router-link to="/register" class="login-register-router register-router">New User? Register</router-link>
                  <router-link to="/search" class="login-register-router">Home</router-link>
                </div>
            </div>
        </div>
      </center>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['setLoginAction']),
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
          this.$store.dispatch('setLoginAction', res.data)
          this.$router.push('/search')
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
      -moz-box-shadow: inset 0 0 2px black;
      -webkit-box-shadow: inset 0 0 2px black;
      box-shadow: inset 0 0 2px black;
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
      -moz-box-shadow: inset 0 0 2px black;
      -webkit-box-shadow: inset 0 0 2px black;
      box-shadow: inset 0 0 2px black;
  }
  .input-css:active{
      outline: none;
  }

  .btn{
      background-color: white;
      width: 80px;
      color: black;
      padding: 10px;
      display: block;
      border: 1px solid black;
      cursor: pointer;
      margin-bottom: 20px;
      -moz-box-shadow: inset 0 0 2px black;
      -webkit-box-shadow: inset 0 0 2px black;
      box-shadow: inset 0 0 2px black;
  }

  .btn:focus{
      outline: none;
  }

  .login-register-router{
      text-decoration: none;
      color: black;
      display: block;
      margin-top: 10px;
  }

  .register-router{
      margin-top: 10px;
  }

  .heading{
    border-bottom: 1px solid black
  }

  .content{
    margin-top: 20px;
  }

  .footer{
    border-top: 1px solid black
  }
</style>
