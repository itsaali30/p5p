export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.cart.reduce((sum, p) => sum + p.price * p.qty, 0);
    }
  },
  methods: {
    pay() {
      alert("Payment successful!");
      this.$store.state.cart.length = 0; // Optional: use mutation if preferred
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
