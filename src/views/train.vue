<template>
    <div>
      <center>
          <div class="heading">
            <h3>Add Train</h3>
          </div>
          <div class="content">
            <input type="text" v-model="id" placeholder="Train Id" name="id" class="input-css">
            <input type="text" v-model="name" placeholder="Train Name" name="name" class="input-css">
            <input type="text" v-model="startLocation" placeholder="Start Location" name="endlocation" class="input-css">
            <input type="text" v-model="endLocation" placeholder="End Location" name="startlocation" class="input-css">
            <input type="time" v-model="departureTime" placeholder="Departure Time" name="departuretime" class="input-css">
            <input type="number" v-model="bogie" placeholder="Num Of Bogies" min=1 name="bogie" class="input-css">
            <button class="btn" @click="onsubmit">Add</button>
          </div>
          <div class="footer">
            <router-link to="/search" class="login-register-router">Home</router-link>
          </div>
      </center>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'train',
  data () {
    return {
      id: '',
      name: '',
      startLocation: '',
      endLocation: '',
      departureTime: '',
      bogie: ''
    }
  },
  methods: {
    onsubmit () {
      const obj = {
        id: this.id,
        name: this.name,
        startLocation: this.startLocation,
        endLocation: this.endLocation,
        departureTime: this.departureTime,
        bogie: this.bogie
      }
      axios.post('http://10.177.68.60:8083/train', obj).then((res) => {
        console.log(res)
        this.$router.push('/train')
      })
    }
  }
}
</script>

<style>

</style>
