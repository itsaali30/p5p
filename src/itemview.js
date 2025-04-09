export default {
  props: ['id'],
  computed: {
    product() {
      return this.$store.state.products.find(p => p.id == this.id);
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addToCart', this.product);
    }
  },
  template: `
    <div v-if="product" class="container mt-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <p class="card-text">{{ product.description }}</p>
          <h5 class="card-text text-primary">\${{ product.price }}</h5>
          <button @click="addItem" class="btn btn-success me-2">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          <router-link to="/cart" class="btn btn-outline-secondary">Go to Cart</router-link>
        </div>
      </div>
    </div>
  `
};
