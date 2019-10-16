<template>
  <div>
    <div id="internalLinks" style="color: white" class="d-flex align-content-center align-items-center justify-content-center">
      <ul class="list-inline list-unstyled d-flex align-content-around align-items-around justify-content-around w-100" style="margin-bottom: 0; padding: 0;">
        <li v-for="dia in calendario" :key="dia.dia">
          <span class="internalLink" v-on:click="scrollToElement('dia_' + dia.dia)">Dia {{dia.dia}}</span>
        </li>
      </ul>
    </div>

    <ul class="container-fluid calendarText">
      <li class="diaLi" v-for="dia in calendario" :key="dia.dia" :id="'dia_' + dia.dia">
        <span class="diaText">
          out. <span class="diaNumber">{{ dia.dia }}</span>
        </span>

        <ul class="diaUl">
          <li v-for="evento in dia.eventos" :key="evento.nome">
            <div class="event-title">
              <h3>
                {{evento.nome}}
              </h3>

              <small>
                {{ formatHour(evento.inicio) + " - " + formatHour(evento.fim) + " / " + evento.local}}
              </small>
            </div>
            <ul>
              <li>Palestrante: {{evento.palestrante}}</li>
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
import calendarService from '../firebase/calendar';

export default {
  name: 'Calendario',
  data: () => ({
    calendario: []
  }),
  async mounted() {
    this.calendario = await calendarService.getCalendar();
  },
  methods: {
    formatHour(hour) {
      return hour.substring(0,2) + ':' + hour.substring(2,4)
    },
    scrollToElement(elemID) {
      let elemYPos = document.getElementById(elemID).offsetTop;
      window.scrollTo({
        top: elemYPos,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
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
    margin: 0 auto;
    position: sticky;
    top: 0;
    background-color: rgba(29, 32, 33, 0.98);
    border-radius:  0 0 25px 25px;
    z-index: 2;
  }

  .internalLink {
    padding: .8em 1.5em;
    color: #eee;
    display: inline-block;
    border-bottom: 2px #666 solid;
    transition: .3s all;
    cursor: pointer;
  }

  @media only screen and (max-width:768px) {
    .internalLink {
      padding: .3em 1.5em;
    }
  }

  .internalLink:hover {
    border-bottom: 2px #991690 solid;
    text-decoration: none;
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
    background-color: rgb(234, 233, 255);
    padding: .6em .8em .4em;
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
    list-style: none;
  }

  .event-title {
    margin: 1.9rem 0 .5rem;
  }

  .event-title h3 {
    margin-bottom: 0;
  }
  .event-title small {
    margin-top: -.2em;
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
