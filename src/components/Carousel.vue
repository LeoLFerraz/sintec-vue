<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="dia in calendario" :key="dia.dia">
        <template v-slot:img>
          <div class="dia">
            {{dia.dia}} de Outubro
            <h1>DIA DE ABERTURA</h1>
            <div v-for="evento in dia.eventos" :key="evento.nome" class="evento">
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
          sliding: null
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
        }
      }
    }
</script>

<style scoped>
  .dia{
    background-color: #721f1f;
    min-height: 100px;
    text-align: center;
    vertical-align: central;
    color: #FFFFFF;
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
    font-size: 2rem;
  }
</style>
