<template>
  <div>
      <center>
        <div class="container">
            <div class="inner-container">
                <h3>Register</h3>
                <form method="post" action="">
                    <input type="text" placeholder="First Name" name="firstname" class="input-css" required>
                    <input type="text" placeholder="Middle Name" name="middlename" class="input-css">
                    <input type="text" placeholder="Last Name" name="lastname" class="input-css">
                    <label for="date" class="label-css">D.O.B.</label>
                    <input type="date" placeholder="Date of Birth" name="date" class="label-input-css" required>
                    <input type="email" placeholder="Email" name="email" class="input-css" required>
                    <input type="tel" placeholder="Phone Number" name="phonenumber" class="input-css" minlength="10" maxlength="10" required>
                    <input type="text" placeholder="Username" name="username" class="input-css" required>
                    <input type="password" v-model="password" placeholder="Password" name="password" class="input-css" minlength="8" maxlength="16" required>
                    <input type="password" v-model="confirmPassword" @keydown="mismatch" placeholder="Confirm Password" name="confirmpassword" class="input-css" minlength="8" maxlength="16" required>
                    <p v-if="password!==confirmPassword" id="mismatch-error">Passwords don't match</p>
                    <button class="btn">Register</button>
                </form>
                <router-link to="/login" class="login-register-router">Existing User? Login</router-link>
            </div>
        </div>
      </center>
  </div>
</template>

<script>
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
    mismatch () {
      if (this.confirmPassword !== this.password && this.confirmPassword !== '') {
        document.getElementById('mismatch-error').style.display = 'block'
      } else {
        document.getElementById('mismatch-error').style.display = 'none'
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
      width: 200px;
      min-width: 200px;
      margin-bottom: 20px;
      outline: none;
      border-radius: 0px;
      border: 0px;
      border-bottom: 1px solid black;
  }
</style>
