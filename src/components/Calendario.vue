<template>
  <div class="container-fluid calendarText d-flex justify-content-center align-items-center align-content-center">

  </div>
</template>

<script>
export default {
  name: 'Calendario',
  data: () => ({
    calendario: []
  }),
  created () {
    this.getData()
    console.log(this.calendario)
  },
  methods: {
    getData () {
      let ref = this.$firebase.database().ref('calendario')
      ref.on('value', data => {
        this.calendario = data.val()
        console.log(this.calendario)
      })
    }
  }}
</script>

<style scoped>
  .calendarText {
    text-align: justify-all;
    color: white;
    background: rgb(47, 61, 247);
    background: linear-gradient(36deg, rgba(47, 61, 247, 1) 0%, rgba(196, 75, 138, 1) 100%);
    border-radius: 25px;
    padding: 30px 20px;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
  }

  #calendarContainer {
    position: relative;
    height: 100%;
  }

  .aboutIcon {
    width: 55px;
    position: absolute;
  }

  #rookSvg {
    top: -4rem;
    left: -2.7rem;
  }

  #brainSvg {
    top: 96%;
    right: -0.7rem;
  }

  #controlSvg {
    top: 102%;
    left: 0;
  }

  #basketballSvg {
    top: -3.5rem;
    right: -2rem;
    transform: rotate(30deg);
  }
</style>
