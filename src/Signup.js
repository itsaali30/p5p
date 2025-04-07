export default {
  template: `
    <div class="container mt-5" style="max-width: 450px;">
      <h2 class="text-center mb-4">Sign Up</h2>
      
      <form @submit.prevent="sendOtp">
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
      password: ''
    };
  },
  methods: {
    async sendOtp() {
      try {
        // WhatsApp OTP (placeholder)
        await fetch('/api/send-otp-whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: this.phone })
        });

        // EmailJS OTP
        await emailjs.send(
          'your_service_id',
          'your_template_id',
          {
            to_name: this.name,
            to_email: this.email,
            otp: Math.floor(100000 + Math.random() * 900000)
          },
          'your_user_id'
        );

        alert('OTP sent via WhatsApp and Email!');
        this.$router.push('/verify-otp');
      } catch (error) {
        console.error(error);
        alert('Error sending OTP. Please try again.');
      }
    }
  },
  mounted() {
    // Load EmailJS
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
      script.onload = () => emailjs.init('your_user_id');
      document.head.appendChild(script);
    }
  }
};
