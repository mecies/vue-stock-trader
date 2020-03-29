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
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
        >
          Buy
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
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
