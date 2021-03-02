<template>
  <div>
      <center>
        <div class="container">
            <div class="inner-container">
              <div class="heading">
                <h3>Register</h3>
              </div>
              <div class="content">
                <input type="text" v-model="firstName" placeholder="First Name" name="firstname" class="input-css">
                <input type="text" v-model="middleName" placeholder="Middle Name" name="middlename" class="input-css">
                <input type="text" v-model="lastName" placeholder="Last Name" name="lastname" class="input-css">
                <label for="date" class="label-css">D.O.B.</label>
                <input type="date" v-model="dob" name="date" class="label-input-css">
                <input type="email" v-model="email" placeholder="Email" name="email" class="input-css">
                <input type="tel" v-model="phoneNumber" placeholder="Phone Number" name="phonenumber" class="input-css">
                <input type="text" v-model="userName" placeholder="Username" name="username" class="input-css">
                <input type="password" v-model="password" placeholder="Password" name="password" class="input-css">
                <input type="password" v-model="confirmPassword" @keyup="mismatch" placeholder="Confirm Password" name="confirmpassword" class="input-css">
                <p id="mismatch-error">Passwords don't match</p>
                <input type="submit" @click="onsubmit" class="btn" value="Register">
              </div>
              <div class="footer">
                <router-link to="/login" class="login-register-router register-router">Existing User? Login</router-link>
                <router-link to="/home" class="login-register-router">Home</router-link>
              </div>
            </div>
        </div>
      </center>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      age: '',
      email: '',
      phoneNumber: '',
      userName: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    findage () {
      const dobirth = new Date(this.dob)
      const monthdiff = Date.now() - dobirth
      const agedt = new Date(monthdiff)
      const year = agedt.getUTCFullYear()
      const age = Math.abs(year - 1970)
      return age
    },
    mismatch () {
      if (this.confirmPassword !== this.password && this.confirmPassword !== '') {
        document.getElementById('mismatch-error').style.display = 'block'
      } else {
        document.getElementById('mismatch-error').style.display = 'none'
      }
    },
    validate () {
      if (this.firstName === '') {
        return false
      } else if (this.dob === '') {
        return false
      } else if (this.email === '') {
        return false
      } else if (this.phoneNumber === '' && this.phoneNumber.length === 10) {
        return false
      } else if (this.userName === '') {
        return false
      } else if (this.password === '' && this.password.length >= 8 && this.password.length <= 16) {
        return false
      } else if (this.confirmPassword === '') {
        return false
      } else if (this.password !== this.confirmPassword) {
        return false
      } else {
        return true
      }
    },
    onsubmit () {
      this.age = this.findage()
      const obj = {
        fname: this.firstName,
        mname: this.middleName,
        lname: this.lastName,
        age: this.age,
        email: this.email,
        phoneNumber: this.phoneNumber,
        userName: this.userName,
        password: this.password
      }
      if (this.validate()) {
        axios.post('http://10.177.68.60:8080/register', obj).then((res) => {
          console.log(res)
          this.$router.push('/login')
        })
      }
    }
  }
}
</script>

<style>
  #mismatch-error{
      display: none;
      color: red;
      margin-bottom: 20px;
  }

  .label-css{
      float: left;
      margin-left: 15px;
      font-size: 14px;
      margin-top: 15px;
  }

  .label-input-css{
      display: block;
      padding: 10px;
      width: 195px;
      min-width: 195px;
      margin-bottom: 20px;
      outline: none;
      border-radius: 0px;
      border: 0px;
      border-bottom: 1px solid black;
      -moz-box-shadow: inset 0 0 2px black;
      -webkit-box-shadow: inset 0 0 2px black;
      box-shadow: inset 0 0 2px black;
  }
</style>
