export default {
  props: ['id'],
  inject: ['addToCart'],
  computed: {
    product() {
      return this.$root.products.find(p => p.id == this.id);
    }
  },
  methods: {
    addItem() {
      this.addToCart(this.product);
    }
  },
  template: `
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p><strong>\${{ product.price }}</strong></p>
      <button @click="addItem" class="btn btn-success">Add to Cart</button>
      <router-link to="/cart" class="btn btn-link">Go to Cart</router-link>
    </div>
  `
};
