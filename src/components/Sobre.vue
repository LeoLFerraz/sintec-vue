<template>
    <div class="container-fluid aboutText d-flex justify-content-center align-items-center align-content-center">
      <div id="aboutIconContainer">
        <img src="../public/img/rook.svg" class="aboutIcon" id="rookSvg">
        <img src="../public/img/control.svg" class="aboutIcon" id="controlSvg">
        <img src="../public/img/brain.svg" class="aboutIcon" id="brainSvg">
        <img src="../public/img/basketball.svg" class="aboutIcon" id="basketballSvg">
      <p>A SINTEC é um evento organizado em
      concomitância com a Semana Nacional de Ciência e Tecnologia com fim de trazer experiências que levem
        os participantes a navegar um pouco pelas inúmeras áreas tocadas pelos cursos do Centro de Ciências
        Exatas e Tecnologia. Tocamos de robótica a esportes, de empreendedorismo a produção musical.</p>
        <p>Nossa comissão organizadora é formada por representantes dos três cursos do CCET e mentorada pelo nosso decano,
        prof. Sidney Lucena.</p>
        <p>O evento contará com a participação de: </p>
        <ul>
          <li>Empresas de tecnologia que se destacam no cenário de inovação brasileiro;</li>
          <li>Pesquisadores da UNIRIO, tanto do corpo docente quanto dos programas de pós-graduação;</li>
          <li>Discentes que desejam disseminar aquilo que aprenderam em seus projetos acadêmicos e profissões;</li>
          <li>Profissionais de diversas áreas que se importam com o cenário da educação e produção tecnológica nacionais.</li>
        </ul>
        <p>O evento é de graça, basta inscrever-se e comparecer ao CCET, na Av. Pasteur, 458, na hora de nossas palestras
        e oficinas. Lembrando que estão sujeitas a lotação!</p>
        <p>Contamos com a parceria do <strong><a style="color:lightcoral" href="https://www.facebook.com/ProjetoDivulga/">Projeto Divulgar</a></strong>,
          que estará presente em nosso evento fazendo a cobertura fotográfica e de conteúdo e vem nos ajudando com a divulgação :)
        </p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Sobre'
}
</script>

<style scoped>
  .aboutText {
    text-align: justify-all;
    color: white;
    background: rgb(150,120,130);
    background: linear-gradient(36deg, rgba(150,120,130,1) 0%, rgba(100,100,200,0.7595413165266106) 100%);
    border-radius: 25px;
    padding: 30px 20px;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
  }

  #aboutIconContainer {
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
