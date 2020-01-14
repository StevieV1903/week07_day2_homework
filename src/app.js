import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      selectedRate: null
    },

    mounted(){
      this.getExchangeRates()},

    methods: {
      getExchangeRates: function() {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(exchangeRates => this.selectedRate = exchangeRates);
      }
    }
  });
});
