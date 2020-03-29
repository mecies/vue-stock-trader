<template>
<div class="col-sm-12 col-md-12">
  <div class="card">
    <h3 class="card-header alert-success">
      {{ stock.name }} <small>(Price: {{ stock.price }})</small>
    </h3>
    <div class="card-body">
      <div class="float-left">
        <input v-model.number="quantity"
          type="number" class="form-control"
          placeholder="Quantity"
        />
      </div>
      <div class="float-right">
        <button
          @click="buyStock" class="btn btn-success"
          :disabled="cantBuy || quantity <= 0 || !Number.isInteger(quantity)"
        >
          {{cantBuy? 'Not enough funds' : 'Buy'}}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    cantBuy() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
  .card {
    margin: 20px 0 20px 0;
  }
</style>
