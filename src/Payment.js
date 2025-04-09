export default {
  inject: ['cart'],
  computed: {
    total() {
      return this.cart.reduce((sum, p) => sum + p.price * p.qty, 0);
    }
  },
  methods: {
    pay() {
      alert("Payment successful!");
      this.cart.length = 0;
      this.$router.push("/");
    }
  },
  template: `
    <div>
      <h2>Checkout</h2>
      <p>Total: <strong>\${{ total }}</strong></p>
      <button class="btn btn-success" @click="pay">Pay Now</button>
    </div>
  `
};
