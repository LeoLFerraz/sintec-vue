import {firebaseApp} from './index';

/**
 * @typedef {Object} Dia
 * @property {number} dia
 * @property {Evento[]} eventos
 */

/**
 * @typedef {Object} Evento
 * @property {String} nome
 */

export const calendarService = {
  _loadPromise: null,
  _loadPromiseAccept: null,
  _data: null,

  async init() {
    this._loadPromise = new Promise((accept) => {
      this._loadPromiseAccept = accept;
    });

    let ref = firebaseApp.database().ref('calendario');

    ref.on('value', data => {
      this._data = this.sortDias(data.val());
      this._loadPromiseAccept(this._data);
    })
  },

  sortDias (dias) {
    const result = [];

    for (let diaKey of Object.keys(dias)) {
      const dia = dias[diaKey];

      const eventos = Object.keys(dia)
        .map(key => dia[key])
        .sort((a, b) => parseInt(a.inicio) - parseInt(b.inicio));

      result.push({
        dia: parseInt(diaKey.replace('dia_', '')),
        eventos
      });
    }

    return result;
  },

  /**
   *
   * @return {Promise<Dia[]>}
   */
  getCalendar() {
    if (this._data) return this._data;
    if (!this._loadPromise) this.init();

    return this._loadPromise;
  }
};

export default calendarService;
