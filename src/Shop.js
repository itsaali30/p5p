export default {
  template: `
    <div>
      <h2 class="mb-3">Products</h2>
      <input v-model="search" class="form-control mb-4" placeholder="Search products..." />

      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in filtered" :key="product.id">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text text-muted">\${{ product.price.toFixed(2) }}</p>
              <router-link :to="'/item/' + product.id" class="btn btn-primary mt-auto">
                <i class="fas fa-eye me-1"></i> View
              </router-link>
            </div>
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
