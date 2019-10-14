<template>
  <div class="container-fluid calendarText d-flex justify-content-center align-items-center align-content-center">
    <ul>
      <li v-for="(dia, name) in calendario" :key="name">
        {{name.replace('_',' ')}}
        <ul>
          <li v-for="(evento, name) in dia" :key="name">
            {{evento.nome}}
            <ul>
              <li>Palestrante: {{evento.palestrante}}</li>
              <li>Horário: {{evento.inicio + "-" + evento.fim}}</li>
              <li>Resumo: {{evento.resumo}}</li>
            </ul>
          </li>
        </ul>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendario',
  data: () => ({
    calendario: [],
    data: 21
  }),
  created () {
    this.getData()
  },
  methods: {
    getData () {
      let ref = this.$firebase.database().ref('calendario')
      ref.on('value', data => {
        this.calendario = data.val()
        this.sortDias()
      })
    },
    sortDias () {
      let eventos = []
      let obj = {}
      for (let dia in this.calendario) {
        eventos = []
        obj[dia] = {}
        for (let evento in this.calendario[dia]) {
          eventos.push(evento)
        }
        let len = eventos.length
        for (let i = len; i > 0; i--) {
          for (let j = 0; j < i - 1; j++) {
            if (this.calendario[dia][eventos[j]]['inicio'] > this.calendario[dia][eventos[j + 1]]['inicio']) {
              let tmp = eventos[j]
              eventos[j] = eventos[j + 1]
              eventos[j + 1] = tmp
            }
          }
        }
        eventos.forEach((evento, i) => {
          obj[dia]['evento' + i] = this.calendario[dia][evento]
        })
      }
      this.calendario = obj
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
  ul {
    margin-bottom: 8px;
  }
</style>
