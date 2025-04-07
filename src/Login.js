export default {
  template: `
    <div class="container mt-5" style="max-width: 400px;">
      <h2 class="text-center mb-4">Login</h2>

      <!-- Google Login -->
      <button class="btn btn-outline-danger w-100 mb-3">
        <i class="fab fa-google me-2"></i> Continue with Google
      </button>

      <div class="text-center mb-3 text-muted">or login with email</div>

      <!-- Email & Password -->
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" required>
        </div>

        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>

      <!-- Links -->
      <div class="text-center mt-3">
        <router-link to="/forgot-password" class="d-block mb-1">Forgot Password?</router-link>
        <router-link to="/signup">Don't have an account? Sign up</router-link>
      </div>
    </div>
  `,
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Placeholder login logic
      alert(`Logging in with: ${this.email}`);
      // You can dispatch Vuex actions here
      // this.$store.dispatch('login', { email: this.email, password: this.password });
      this.$router.push('/');
    }
  }
};
