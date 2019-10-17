<template>
    <div style="color: white">
      Não disponível em produção!
      <form>
        <label for="diaEvento">Dia: </label><select type="text" name="diaEvento" id="diaEvento">
        <option value="dia_21">Dia 21</option>
        <option value="dia_22">Dia 22</option>
        <option value="dia_23">Dia 23</option>
        <option value="dia_24">Dia 24</option>
        <option value="dia_25">Dia 25</option>
      </select><br>
        <label for="idEvento">ID: </label><input type="text" name="idEvento" id="idEvento"><br>
        <label for="nomeEvento">Nome: </label><input type="text" name="nomeEvento" id="nomeEvento"><br>
        <label for="inicioEvento">Inicio (formato 0000 a 2359. Se início for às 17h30min, o input aqui deve ser 1730):
        </label><input type="text" name="inicioEvento" id="inicioEvento"><br>
        <label for="fimEvento">Fim (formato 0000 a 2359): </label><input type="text" name="fimEvento" id="fimEvento"><br>
        <label for="localEvento">Local: </label><input type="text" name="localEvento" id="localEvento"><br>
        <label for="palestranteEvento">Palestrante: </label><input type="text" name="palestranteEvento" id="palestranteEvento"><br>
        <label for="resumoEvento">Resumo: </label><input type="text" name="resumoEvento" id="resumoEvento"><br>
        <label for="statusEvento">Status: </label><select name="statusEvento" id="statusEvento"><br>
        <option value="Confirmado" selected="selected">Confirmado</option>
        <option value="Não Confirmado">Não Confirmado</option>
        <option value="Especial">Especial</option>
        <option value="Cancelado">Cancelado</option></select>
        <button type="button" id="confirmar" v-on:click="addEvent">Confirmar</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'CadastroEvento',
  methods: {
    addEvent: function () {
      let diaEvento = document.getElementById('diaEvento').value
      let idEvento = document.getElementById('idEvento').value
      let event = {
        nome: document.getElementById('nomeEvento').value,
        inicio: document.getElementById('inicioEvento').value,
        fim: document.getElementById('fimEvento').value,
        local: document.getElementById('localEvento').value,
        palestrante: document.getElementById('palestranteEvento').value,
        resumo: document.getElementById('resumoEvento').value,
        status: document.getElementById('statusEvento').value
      }
      this.$firebase.database().ref('calendario').child(diaEvento).child('evento' + idEvento).set(event)
    }
  }
}
</script>

<style scoped>

</style>
