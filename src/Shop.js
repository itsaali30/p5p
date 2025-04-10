export default {
  template: `
    <div>
      <h2 class="mb-3">Products</h2>
      <input v-model="search" class="form-control mb-4" placeholder="Search products..." />

      <div v-for="(product, index) in filtered" :key="product.id" class="card mb-4 p-3 shadow-sm">
        <div class="row align-items-center">
          <!-- Icon -->
          <div :class="['col-2 text-center', index % 2 === 0 ? 'order-3' : 'order-1']">
            <div class="text-success fs-3">
              <i :class="['fas', product.icon]"></i>
            </div>
          </div>

          <!-- Product Info -->
          <div class="col-8 order-2">
            <h5 class="mb-1">{{ product.name }}</h5>
            <p class="mb-1 text-muted">{{ product.desc }}</p>
            <h6 class="text-primary">\${{ product.price.toFixed(2) }}</h6>
          </div>

          <!-- Insert Button -->
          <div :class="['col-2 text-center', index % 2 === 0 ? 'order-1' : 'order-3']">
            <button class="btn btn-outline-primary btn-sm w-100" @click="insert(product)">
              <i class="fas fa-cart-plus me-1"></i> Insert
            </button>
          </div>
        </div>
      </div>

      <div v-if="inserted.length" class="mt-4">
        <h4>Inserted Items</h4>
        <ul class="list-group mb-2">
          <li v-for="(p, i) in inserted" :key="i" class="list-group-item d-flex justify-content-between">
            <span><i :class="['fas', p.icon, 'me-2']"></i>{{ p.name }}</span>
            <span class="fw-bold">\${{ p.price.toFixed(2) }}</span>
          </li>
        </ul>
        <div class="text-end fw-bold">Total: \${{ totalPrice.toFixed(2) }}</div>
      </div>
    </div>
  `,
  data() {
    return {
      search: "",
      inserted: []
    };
  },
  computed: {
    filtered() {
      return this.$store.state.products.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    totalPrice() {
      return this.inserted.reduce((sum, p) => sum + p.price, 0);
    }
  },
  methods: {
    insert(product) {
      this.inserted.push(product);
    }
  }
};
