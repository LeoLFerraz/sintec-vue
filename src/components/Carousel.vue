<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <div class="dia">
            21 de Outubro
            <h1>DIA DE ABERTURA</h1>
            <div class="evento">
              <div class="horario">17:00</div>
              <div class="titulo">Cerimônia de abertura</div>
              <div class="descricao">Com a comissão organizadora da SINTEC</div>
            </div>
            <div class="evento">
              <div class="horario">17:00</div>
              <div class="titulo">Cerimônia de abertura</div>
              <div class="descricao">Com a comissão organizadora da SINTEC</div>
            </div>
            <div class="evento">
              <div class="horario">17:00</div>
              <div class="titulo">Cerimônia de abertura</div>
              <div class="descricao">Com a comissão organizadora da SINTEC</div>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <div class="dia">
            21 de Outubro
            <h1>DIA DE ABERTURA</h1>
            <div class="evento">
              <div class="horario">17:00</div>
              <div class="titulo">Cerimônia de abertura</div>
              <div class="descricao">Com a comissão organizadora da SINTEC</div>
            </div>
            <div class="evento">
              <div class="horario">17:00</div>
              <div class="titulo">Cerimônia de abertura</div>
              <div class="descricao">Com a comissão organizadora da SINTEC</div>
            </div>
            <div class="evento">
              <div class="horario">17:00</div>
              <div class="titulo">Cerimônia de abertura</div>
              <div class="descricao">Com a comissão organizadora da SINTEC</div>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
    export default {
        name: "Carousel",
      data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      methods: {
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
