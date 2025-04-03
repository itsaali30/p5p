export default {
    template: `
        <div class="text-center py-5">
            <h1 class="mb-3 text-primary">Welcome to 5Earn Company</h1>
            <p class="lead">Invest in AI-powered welfare and start earning today.</p>
            <p>Deposit 5% and beat BTC with our AI-driven profit system.</p>
            
            <div class="mt-4">
                <button class="btn btn-success btn-lg me-2" @click="joinNow">
                    <i class="fas fa-coins"></i> Join Now
                </button>
                <router-link to="/sell" class="btn btn-outline-primary btn-lg">
                    <i class="fas fa-shopping-cart"></i> Sell Products
                </router-link>
            </div>

            <div class="mt-5">
                <h3>Why Choose 5Earn?</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fas fa-robot text-info"></i> AI-driven Investment Strategy</li>
                    <li class="list-group-item"><i class="fas fa-hand-holding-usd text-success"></i> Secure & Reliable</li>
                    <li class="list-group-item"><i class="fas fa-chart-line text-warning"></i> High Returns</li>
                </ul>
            </div>
        </div>
    `,
    methods: {
        joinNow() {
            alert("Welcome to 5Earn Company! Start investing today.");
        }
    }
};
