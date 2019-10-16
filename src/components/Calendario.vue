<template>
  <div>
    <div id="internalLinks" style="color: white" class="d-flex align-content-center align-items-center justify-content-center">
      <ul class="list-inline list-unstyled d-flex align-content-around align-items-around justify-content-around w-100" style="margin-bottom: 0; padding: 0;">
        <li v-for="(dia, name) in calendario" :key="name">
          <a class="internalLink" :href="'#' + name">{{name.replace('_', ' ').replace('d', 'D')}}</a>
        </li>
      </ul>
    </div>
    <ul class="container-fluid calendarText">
      <li class="diaLi" v-for="(dia, name) in calendario" :key="name">
        <span class="diaText" :id="name">out. <span class="diaNumber">{{name.substring(4,7)}}</span></span>
        <ul class="diaUl">
          <li v-for="(evento, name) in dia" :key="name">
              <span class="nomeText row">
                <div class="col-12 col-md-auto">
                  {{evento.nome}}
                </div>
                <div>
                  <small>
                    {{evento.inicio.substring(0,2) + 'h ' + evento.inicio.substring(2,4) + 'min' + " - " +
                    evento.fim.substring(0,2) + 'h ' + evento.fim.substring(2,4) + 'min'}}
                  </small>
                </div>
              </span>
            <ul>
              <li>Palestrante: {{evento.palestrante}}</li>
              <li>Local: {{evento.local}}</li>
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
    calendario: []
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
    background: rgb(150,120,130);
    background: linear-gradient(36deg, rgba(150,120,130,1) 0%, rgba(100,100,200,0.7595413165266106) 100%);
    border-radius: 25px;
    padding: 20px 0px;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
  }

  #internalLinks {
    max-width: 1000px;
    margin: 10px auto 0 auto;
    position: sticky;
    top: 0px;
    background-color: rgba(29, 32, 33, 0.98);
    border-radius:  0 0 25px 25px;
    z-index: 2;
  }

  .nomeText {
    font-size: 1.2em;
  }

  .diaLi {
    list-style: none;
    text-align: center;
  }

  .diaText {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 600;
    background-color: rgba(241, 231, 197, 0.5);
    padding: 0.4em;
    border-radius: 10px;
    color: #2F7DE0;
  }

  .diaNumber {
    font-size:2rem;
  }

  .diaLi ul {
    text-align: left;
  }

  .diaUl{
    margin-top: 10px;
  }

  ul {
    padding-left: 2em;
    padding-right: 0.3em;
    margin-bottom: 15px;
  }

  small {
    color: #9dffd7;
  }
</style>
