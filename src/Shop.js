export default {
  template: `
    <div>
      <h2 class="mb-3">Products</h2>
      <input v-model="search" class="form-control mb-4" placeholder="Search products..." />

      <div v-for="(product, index) in filtered" :key="product.id" class="card mb-4 p-3 shadow-sm">
        <div class="row align-items-center">
          <!-- Icon -->
          <div :class="['col-2 text-center fs-3 text-success', index % 2 === 0 ? 'order-1' : 'order-3']">
            <i :class="['fas', product.icon]"></i>
          </div>

          <!-- Info -->
          <div class="col-8 order-2">
            <h5 class="mb-1">{{ product.name }}</h5>
            <p class="mb-1">{{ product.desc }}</p>
            <p class="fw-bold">\${{ product.price.toFixed(2) }}</p>
          </div>

          <!-- View Button -->
          <div :class="['col-2 text-center', index % 2 === 0 ? 'order-3' : 'order-1']">
            <router-link :to="'/item/' + product.id" class="btn btn-outline-primary btn-sm w-100">
              <i class="fas fa-eye me-1"></i> View
            </router-link>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return { search: "" };
  },
  computed: {
    filtered() {
      return this.$store.state.products.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
