export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    }
  },
  methods: {
    increaseQty(item) {
      this.$store.commit('addToCart', item);
    },
    decreaseQty(item) {
      this.$store.commit('removeFromCart', item);
    }
  },
  template: `
    <div>
      <h2>Your Cart</h2>
      <div v-if="cart.length === 0">Cart is empty.</div>
      <ul class="list-group mb-3" v-else>
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" v-for="(item, i) in cart" :key="i">
          <div class="col-md-6">
            {{ item.name }} - \${{ item.price }} each
          </div>
          <div class="col-md-6 d-flex justify-content-end align-items-center">
            <button class="btn btn-sm btn-outline-secondary me-2" @click="decreaseQty(item)">−</button>
            <span class="me-2">{{ item.qty }}</span>
            <button class="btn btn-sm btn-outline-secondary me-3" @click="increaseQty(item)">+</button>
            <strong>\${{ item.price * item.qty }}</strong>
          </div>
        </li>
      </ul>
      <p v-if="cart.length"><strong>Total: \${{ total }}</strong></p>
      <router-link to="/payment" class="btn btn-primary" v-if="cart.length">Proceed to Payment</router-link>
    </div>
  `
};
