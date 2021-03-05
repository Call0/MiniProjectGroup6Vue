<template>
<div id="historypane">
    <navbar></navbar>
    <div>
    <h1>Booking History</h1>
    <center>
    <table id="historytable">
        <tr>
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Train ID</th>
                    <th>Train Name</th>
                    <th>Date of Journey</th>
                    <th>Seats Booked</th>
                    <th>Seat List</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in response" :key = "item.id">
                    <td>{{item.bookingId}}</td>
                    <td>{{item.trainId}}</td>
                    <td>{{item.trainName}}</td>
                    <td>{{item.dateOfJourney}}</td>
                    <td>{{item.seatCount}}</td>
                    <td>{{item.seatList}}</td>
                </tr>
            </tbody>
        </tr>
    </table>
    </center>
    <footerbar></footerbar>
</div>
</div>

</template>
<script>
import axios from 'axios'
import navbar from '../components/navbar.vue'
import { mapActions, mapGetters } from 'vuex'
import footer from '../components/footer.vue'
export default {
  name: 'historypane',
  data () {
    return {
      sessionId: localStorage.getItem('sessionID'),
      response: []
    }
  },
  mounted () {
    const obj = { sessionID: this.sessionId }
    axios.post('http://10.177.68.57:8082/bookingHistory', obj)
      .then((res) => {
        this.response = res.data
        console.log(this.response)
      }).catch(err => console.log(err))
  },
  computed: {
    ...mapGetters(['getBookingHistory'])
  },
  methods: {
    ...mapActions(['setBookingHistory'])
  },
  components: {
    navbar: navbar,
    footerbar: footer
  }
}
</script>

<style>
*{
    box-sizing: border-box;
    font-family: Helvetica, sans-serif,Arial;
    background-image: none;
}
#historypane {
    text-align: center;
}
th{
    padding: 40px;
    border: 2px solid green;
}
td{
    padding: 4px;
    text-align: center;
    border: 2px solid green;
}
body{
    background: none;
    margin: -8px;
}
</style>
