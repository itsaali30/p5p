export default {
  template: `
    <div class="container mt-5" style="max-width: 450px;">
      <h2 class="text-center mb-4">Sign Up</h2>

      <!-- Google Signup Button -->
      <button class="btn btn-outline-danger w-100 mb-3" @click="signupWithGoogle" v-if="!otpSent">
        <i class="fab fa-google me-2"></i> Sign up with Google
      </button>

      <!-- Sign Up Form -->
      <form @submit.prevent="sendOtp" v-if="!otpSent">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Phone (with country code)</label>
          <input v-model="phone" type="text" class="form-control" placeholder="+911234567890" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-success w-100">Send OTP</button>
      </form>

      <!-- OTP Verification -->
      <div v-if="otpSent">
        <div class="mb-3">
          <label class="form-label">Enter OTP</label>
          <input v-model="enteredOtp" type="text" class="form-control" required>
        </div>
        <button class="btn btn-primary w-100" @click="verifyOtp">Verify OTP</button>
      </div>

      <div class="text-center mt-3">
        <router-link to="/login">Already have an account? Login</router-link>
      </div>
    </div>
  `,
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      otp: '',
      enteredOtp: '',
      otpSent: false
    };
  },
  methods: {
    async sendOtp() {
      try {
        this.otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Send WhatsApp OTP
        await axios.post('/api/send-otp-whatsapp', {
          phone: this.phone,
          otp: this.otp
        });

        // Send Email OTP via EmailJS
        await emailjs.send(
          'your_service_id',
          'your_template_id',
          {
            to_name: this.name,
            to_email: this.email,
            otp: this.otp
          },
          'your_user_id'
        );

        this.otpSent = true;
        alert('OTP sent via WhatsApp and Email.');
      } catch (err) {
        console.error(err);
        alert('Failed to send OTP.');
      }
    },

    async verifyOtp() {
      if (this.enteredOtp === this.otp) {
        try {
          // Send signup data to Airtable
          await axios.post('https://api.airtable.com/v0/YOUR_BASE_ID/users', {
            fields: {
              name: this.name,
              email: this.email,
              phone: this.phone,
              password: this.password
            }
          }, {
            headers: {
              Authorization: 'Bearer YOUR_API_KEY',
              'Content-Type': 'application/json'
            }
          });

          alert('Signup completed!');
          this.$router.push('/wallet');
        } catch (err) {
          console.error(err);
          alert('Signup failed.');
        }
      } else {
        alert('Incorrect OTP.');
      }
    },

    signupWithGoogle() {
      alert('Google signup not yet implemented.');
    }
  },

  mounted() {
    // Load EmailJS if not already loaded
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
      script.onload = () => emailjs.init('your_user_id');
      document.head.appendChild(script);
    }
  }
};
