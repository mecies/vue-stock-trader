<template>
  <div class="stocks-container">
    <Stock v-for="stock in stocks" :key="`stock-${stock.id}`" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
  },
};
</script>

<style lang="scss">
.stocks-container {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
