<template>
  <div>
    <navbar/>
        <div class="middle-container">
          <div class="home-container">
            <center>
              <input type="text" name="from" v-model="from" placeholder="Departure Station" class="input-css">
              <img src="@/assets/exchange.png" class="exchange-img" @click="exchangeFromTo">
              <input type="text" name="to" v-model="to" placeholder="Arrival Station" class="input-css">
              <label for="date" id="label-css-search" class="label-css">Date</label>
              <input type="date" v-model="date" name="date" class="home-label-input-css">
              <button class="btn" @click="onsubmit">Search</button>
            </center>
          </div>
        </div>
        <div class="search-result">
          <div v-for="searchElement in getSearchResult" :key="searchElement.id" class="card-view">
            <h3>{{searchElement.name}} ({{searchElement.trainId}})</h3>
            <table class="table-css" cellspacing="10px">
              <tr>
                <td class="left">From: {{searchElement.startLocation}}</td>
                <td class="right">To: {{searchElement.endLocation}}</td>
              </tr>
              <tr>
                <td class="left">Departure Time: {{searchElement.departureTime}}</td>
                <td class="right">Arrival Time: {{searchElement.totalSeats}}</td>
              </tr>
              <tr>
                <td class="left">Date: {{searchElement.date}}</td>
                <td class="right">Seats Available: {{searchElement.totalSeats}}</td>
              </tr>
              <tr>
                <td colspan="2" class="right"><button class="btn">Book Ticket</button></td>
              </tr>
            </table>
          </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import navbar from '../components/navbar.vue'
export default {
  name: 'home',
  data () {
    return {
      from: '',
      to: '',
      date: ''
    }
  },
  methods: {
    ...mapActions(['setSearchResult']),
    exchangeFromTo () {
      var from = this.to
      var to = this.from
      this.to = to
      this.from = from
    },
    onsubmit () {
      const obj = {
        fromLocation: this.from,
        toLocation: this.to,
        date: this.date
      }
      var url = 'http://10.177.68.60:8080/search'
      axios.post(url, obj).then((res) => {
        this.$store.dispatch('setSearchResultAction', res.data)
      })
    }
  },
  components: {
    navbar: navbar
  },
  computed: {
    ...mapGetters(['getSearchResult'])
  }
}
</script>

<style>
 .home-input{
   display: inline;
 }

 .exchange-img{
   width: 30px;
   height: 30px;
   display: block;
   margin-top: -15px;
   padding: 10px;
   margin-bottom: 5px;
   cursor: pointer;
   transform: rotate(90deg);
 }

 .left{
   float: left
 }

 .right{
   float: right
 }

 .home-container{
   margin-top: 120px;
   margin-left: 50px;
   width: 300px;
   border: 1px solid white;
   padding: 10px;
   border-radius: 10px;
   padding-top: 30px;
   -moz-box-shadow: 0 0 10px 1px gray;
   -webkit-box-shadow: 0 0 10px 1px gray;
   box-shadow: 0 0 10px 1px gray;
   background-color: white;
 }

 .home-label-input-css{
      display: block;
      padding: 10px;
      width: 186px;
      min-width: 186px;
      margin-bottom: 30px;
      margin-top: 30px;
      outline: none;
      border-radius: 5px;
      border: 0px;
      border-bottom: 1px solid white;
      -moz-box-shadow: 0 0 10px 1px gray;
      -webkit-box-shadow: 0 0 10px 1px gray;
      box-shadow: 0 0 10px 1px gray;
  }

  .search-result{
    padding-top: 120px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 300px;
    margin-left: 420px;
  }

  .middle-container{
    background-color: white;
    width: 420px;
    border-right: 1px solid black;
    height: 100vh;
    float: left;
    position: fixed;
  }

  .btn:hover{
    background-color: lightblue;
  }

  .card-view{
    height: 215px;
    min-width: 300px;
    width: 600px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid white;
    margin-bottom: 20px;
    -moz-box-shadow: 0 0 10px 1px gray;
    -webkit-box-shadow: 0 0 10px 1px gray;
    box-shadow: 0 0 10px 1px gray;
  }

  #label-css-search{
    font-size: 26px;
  }

  .table-css{
    width: 100%
  }

  @media only screen and (max-width: 1100px) {
    .card-view {
      margin-left: 30px;
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 900px) {
    .middle-container{
      background-color: white;
      width: 100vw;
      border-right: 0px solid black;
      height: 450px;
      position: initial;
      display: flex;
      justify-content: center;
    }

    .home-container{
      margin-left: 0px;
    }

    .search-result{
      width: 100vw;
      padding-top: 50px;
      margin-left: 0px;
    }

    .card-view{
      float: left;
    }

    .train-animate{
      animation-duration: 5s;
      animation-name: slidein;
    }
    @keyframes slidein {
      to {
        margin-left: 30%;
        width: 100%;
      }
      from {
        margin-left: 0%;
        width: 100%;
      }
    }
  }
</style>
