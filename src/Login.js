export default {
  name: "LoginModal",
  computed: {
    show() {
      return this.$store.state.showLoginModal;
    }
  },
  watch: {
    show(newVal) {
      const modalEl = document.getElementById("loginModal");
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      newVal ? modal.show() : modal.hide();
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("setLoginModal", false);
    },
    loginWithGoogle() {
      console.log("Google login clicked");
      // Add actual Google login logic here
    },
    loginWithEmail() {
      console.log("Email:", this.email, "Password:", this.password);
      // Add email/password login logic here
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  template: `
    <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <button class="btn btn-outline-dark w-100 mb-3" @click="loginWithGoogle">
              <i class="bi bi-google"></i> Continue with Google
            </button>
            <hr>
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="email">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>
            <button class="btn btn-primary w-100" @click="loginWithEmail">Login</button>
            <div class="text-center mt-3">
              <router-link to="/signup">Sign up</router-link> |
              <router-link to="/forgot-password">Forgot password?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};
