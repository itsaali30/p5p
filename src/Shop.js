export default {
  template: `
    <div>
      <h2>Products</h2>
      <input v-model="search" class="form-control mb-3" placeholder="Search products..." />
      <div class="row">
        <div class="col-md-4 mb-3" v-for="product in filtered" :key="product.id">
          <div class="card h-100">
            <div class="card-body d-flex flex-column">
              <h5>{{ product.name }}</h5>
              <p>\${{ product.price }}</p>
              <router-link :to="'/item/' + product.id" class="btn btn-primary mt-auto">View</router-link>
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
