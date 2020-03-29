<template>
  <div class="stocks-container">
    <Stock v-for="stock in stocks" :key="`stock-${stock.id}`" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 200 },
        { id: 2, name: 'Twitter', price: 20 },
        { id: 3, name: 'Dziq', price: 50 },
      ],
    };
  },
  components: { Stock },
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
