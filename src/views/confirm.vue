<template>
  <div>
    <div>
        <div class="book-container">
          <div class="home-container">
            <center>
              <img src="@/assets/001-ticket.png" class="ticket-confirm">
              <h3>Train Ticket</h3>
            </center>
            <table class="table-css" cellspacing="10px">
                <tr>
                    <td class="left">Train No.</td>
                    <td class="right">Date</td>
                </tr>
                <tr>
                    <td class="left">12345</td>
                    <td class="right">NA</td>
                </tr>
                <tr>
                    <center>
                        <td colspan="2">Source <img src="@/assets/train-tracks.png" class="ticket-confirm-track"> Destination</td>
                    </center>
                </tr>
                <tr>
                    <center>
                        <td colspan="2">Passenger Details</td>
                    </center>
                </tr>
                <tr>
                    <td class="left">NAME</td>
                    <td class="right">SEAT NO.</td>
                </tr>
                <tr>
                    <td class="left">Passenger Name</td>
                    <td class="right">Seat No.</td>
                </tr>
            </table>
          </div>
        </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'confirm'
}
</script>

<style>
  .ticket-confirm{
      margin-top: -100px;
      width: 200px;
      height: 200px
  }

  .ticket-confirm-track{
      width: 20px;
      height: 10px;
  }
</style>
