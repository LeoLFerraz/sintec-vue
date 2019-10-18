<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="dia in calendario" :key="dia.dia" class="carousel-slide">
        <template v-slot:img>
          <div class="dia" v-on:load="incrementSlideCounter">
            {{dia.dia}} de Outubro - Panorama Geral <br>
            <small><small>Acesse "Cronograma" para checar os detalhes!</small></small>
            <h2>{{dia.eventos[0].nomeDia}}</h2>
            <div v-for="evento in dia.eventos" :key="evento.nome" class="evento" v-if="evento.nome!='Break' && evento.nome!='Desconferência'">
              <div class="horario">{{formatHour(evento.inicio)}}</div>
              <div class="titulo">{{evento.nome}}</div>
              <div class="descricao">{{evento.palestrante}}</div>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  import calendarService from '../firebase/calendar';
  export default {
        name: "Carousel",
      data() {
        return {
          calendario: [],
          slide: 0,
          sliding: null,
          slideCounter: 0
        }
      },
      async mounted() {
        this.calendario = await calendarService.getCalendar();
      },
      methods: {
        formatHour(hour) {
          return hour.substring(0,2) + ':' + hour.substring(2,4)
        },
        onSlideStart() {
          this.sliding = true
        },
        onSlideEnd() {
          this.sliding = false
        },
        incrementSlideCounter() {
          this.slideCounter++;
        }
      }
    }
</script>

<style scoped>
  .carousel-slide:nth-child(odd) {
    background-color: rgba(100, 35, 21, 0.31);
  }

  .carousel-slide:nth-child(even) {
    background-color: rgba(100,100,200,0.31);
  }

  .evento {
    margin-bottom: 2rem;
  }

  .dia{
    min-height: 100px;
    text-align: center;
    vertical-align: central;
    color: #FFFFFF;
    padding: 10px 0 50px 0;
  }
  .horario{
    color: #9dffd7;
    display: inline-block;
  }
  .descricao{
    color: #9dffd7;
  }
  .titulo{
    display: inline-block;
    font-size: 1.4rem;
  }
</style>
