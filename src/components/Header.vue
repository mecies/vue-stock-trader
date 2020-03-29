<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
  aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link class="nav-item" to='/portfolio' tag="li" activeClass="active">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link class="nav-item" to='/stocks' tag="li" activeClass="active">
        <a class="nav-link">Stocks</a>
      </router-link>
        <strong class="navbar-text right">Funds: {{ funds | currency}}</strong>
       <li class="navbar-text" @click="endDay">End day</li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      return this.randomizeStocks();
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.getStocks,
      };
      this.$http.put('data.json', data);
    },
  },
};
</script>

<style scoped>
.navbar-text {
  margin-left: 15px;
  cursor: pointer;
}
</style>
