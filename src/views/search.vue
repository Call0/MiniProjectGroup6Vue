<template>
  <div>
    <navbar/>
        <div class="middle-container">
          <div class="home-container">
            <center>
              <input type="text" name="from" v-model="from" placeholder="Departure Station" class="input-css">
              <img src="@/assets/exchange-img.png" class="exchange-img" @click="exchangeFromTo">
              <input type="text" name="to" v-model="to" placeholder="Arrival Station" class="input-css">
              <label for="date" class="label-css">Date</label>
              <input type="date" v-model="date" name="date" class="home-label-input-css">
              <button class="btn" @click="onsubmit">Search</button>
            </center>
          </div>
        </div>
        <div class="search-result">
          <div v-for="searchElement in getSearchResult" :key="searchElement.id" class="card-view">
            <p>{{searchElement}}</p>
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
   margin-bottom: 5px;
   cursor: pointer
 }

 .home-container{
   margin-top: 120px;
   margin-left: 50px;
   width: 300px;
   border: 1px solid black;
   padding: 10px;
   padding-top: 20px;
   -moz-box-shadow: inset 0 0 2px black;
   -webkit-box-shadow: inset 0 0 2px black;
   box-shadow: inset 0 0 2px black;
   background-color: white;
 }

 .home-label-input-css{
      display: block;
      padding: 10px;
      width: 208px;
      min-width: 208px;
      margin-bottom: 20px;
      outline: none;
      border-radius: 0px;
      border: 0px;
      border-bottom: 1px solid black;
      -moz-box-shadow: inset 0 0 2px black;
      -webkit-box-shadow: inset 0 0 2px black;
      box-shadow: inset 0 0 2px black;
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
    height: 150px;
    min-width: 300px;
    width: 600px;
    border: 1px solid black;
    margin-bottom: 20px;
    -moz-box-shadow: inset 0 0 2px black;
    -webkit-box-shadow: inset 0 0 2px black;
    box-shadow: inset 0 0 2px black;
  }

  @media only screen and (max-width: 1100px) {
    .card-view {
      margin-left: 30px;
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 800px) {
    .middle-container{
      background-color: white;
      width: 100vw;
      border-right: 0px solid black;
      height: 400px;
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

    .card-view {
      float: left;
    }
  }
</style>
