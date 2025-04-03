export default {
    template: `
        <div class="container py-5 text-center">
            <!-- Banner Section -->
            <div class="banner bg-primary text-white py-4 mb-4">
                <h1>Welcome to 5Earn Company</h1>
                <p>Invest smartly with our AI-powered trading system</p>
            </div>
            
            <!-- AI Trading Info -->
            <div class="card p-4 mb-4 shadow-sm">
                <h2 class="text-success">AI Bot Trading System</h2>
                <p>Our AI bot analyzes the market and maximizes your earnings.</p>
                <p>Buy 10% bonus 5ERN coin, Sell with star keys (Each 5RS per key). Earn 5% guaranteed!</p>
            </div>
            
            <!-- Action Buttons -->
            <div class="mt-3">
                <button class="btn btn-success btn-lg me-2" @click="buyCoins">
                    <i class="fas fa-coins"></i> Buy & Earn
                </button>
                <button class="btn btn-warning btn-lg me-2" @click="sellKeys">
                    <i class="fas fa-key"></i> Sell Star Keys
                </button>
                <router-link to="/trade" class="btn btn-outline-primary btn-lg">
                    <i class="fas fa-chart-line"></i> Trade Now
                </router-link>
            </div>
            
            <!-- Why Choose 5Earn -->
            <div class="mt-5">
                <h3>Why Choose 5Earn?</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fas fa-robot text-info"></i> AI-powered Investment</li>
                    <li class="list-group-item"><i class="fas fa-hand-holding-usd text-success"></i> Secure & Reliable</li>
                    <li class="list-group-item"><i class="fas fa-chart-line text-warning"></i> High Returns & Bonus Coins</li>
                </ul>
            </div>
        </div>
    `,
    methods: {
        buyCoins() {
            alert("You bought 5ERN coins with a 10% bonus!");
        },
        sellKeys() {
            alert("You sold your star keys for 100ERN with a 5% guaranteed profit!");
        }
    }
};
