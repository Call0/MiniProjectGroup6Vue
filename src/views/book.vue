<template>
  <div>
    <div>
    <navbar/>
        <div class="book-container">
          <div class="home-container">
            <center>
              <h3>Enter Booking Details</h3>
              <input type="text" name="trainid" placeholder="Train Id" v-model="trainId" class="input-css" disabled>
              <label for="date" id="label-css-search" class="label-css">Date</label>
              <input type="date" v-model="doj" name="date" class="home-label-input-css">
              <div v-for="(c, k) in seatCount" :key="k">
                <input type="text" name="name" placeholder="Name" v-model="passengers[k]" class="input-css">
                <input type="number" name="age" placeholder="Age" v-model="list[k]" class="input-css">
              </div>
              <button class="btn" @click="update">Add Passenger</button>
              <button class="btn">Book Ticket</button>
            </center>
          </div>
        </div>
   </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
  name: 'book',
  data () {
    return {
      trainId: '',
      doj: '',
      seatCount: 1,
      passengers: [],
      list: []
    }
  },
  methods: {
    update () {
      if (this.seatCount < 5) {
        this.seatCount++
      }
      console.log(this.list)
      console.log(this.passengers)
    }
  },
  components: {
    navbar: navbar
  }
}
</script>

<style>

 .book-container{
    display: flex;
    justify-content: center;
    justify-items: center;
    background-color: white;
    border-right: 1px solid black;
  }
</style>
