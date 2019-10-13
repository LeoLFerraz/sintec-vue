<template>
    <div class="d-flex flex-column align-items-center align-content-center justify-content-around container-fluid">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe47BSKJF6laN6NxeHVp9eF55inUOSWUQX7jAX8csyW4mTGKA/viewform?embedded=true"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style="width:100%;" id="formIframe" scrolling="no">Carregando…</iframe>
    </div>
</template>

<script>
export default {
  name: 'Inscricao'
}

</script>

<style scoped>
  #formIframe {
    text-align: justify-all;
    color: white;
    background: rgb(47, 61, 247);
    background: linear-gradient(36deg, rgba(47, 61, 247, 1) 0%, rgba(196, 75, 138, 1) 100%);
    border-radius: 25px;
    padding: 30px 20px;
    max-width: 1000px;
    margin: 20px auto;
    height: 1750px;
  }
  @media only screen and (max-height: 768px) {
    #formIframe {
      height: 2350px;
    }
  }
</style>
