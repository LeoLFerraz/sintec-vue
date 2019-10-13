<template>
  <div class="row">
    <CalendarCard :dia="21" :evento="calendario.dia_21.evento1" />
    <CalendarCard :dia="21" :evento="calendario.dia_21.evento2" />
    <CalendarCard :dia="21" :evento="calendario.dia_21.evento3" />
    <CalendarCard :dia="21" :evento="calendario.dia_21.evento3" />
  </div>
</template>

<script>
import CalendarCard from './CalendarCard'
export default {
  name: 'Calendar',
  components: {
    CalendarCard
  },
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
  }
}
</script>

<style scoped>
div{
  color: #FFFFFF;
}
</style>
