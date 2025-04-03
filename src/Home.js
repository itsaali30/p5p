export default {
    template: `
        <div class="container py-5 text-center">
            <!-- Sidebar Overlay -->
            <div class="offcanvas-backdrop fade show" v-if="sideMenuOpen" @click="closeSideMenu"></div>
            
            <!-- Carousel Section -->
            <div id="tradingCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/aseets/logo.jpg" class="d-block w-100 rounded" alt="AI Trading">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>AI-Powered Trading</h5>
                            <p>Maximize your profits with our advanced AI algorithms.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/trading2.jpg" class="d-block w-100 rounded" alt="Buy & Earn">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Earn More with 5ERN</h5>
                            <p>Get a 10% bonus on every purchase.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/aseets/logo.jpg" class="d-block w-100 rounded" alt="Secure & Reliable">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Secure & Reliable</h5>
                            <p>Guaranteed returns with our AI-driven investment system.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#tradingCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#tradingCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
            <!-- AI Trading Info -->
            <div class="card p-4 mb-4 shadow-lg border-0 rounded text-dark">
                <h2 class="text-success fw-bold">AI Bot Trading System</h2>
                <p class="text-muted">Our AI bot analyzes the market and maximizes your earnings.</p>
                <p class="fw-semibold">Buy and get a <span class="text-primary">10% bonus</span> in 5ERN coins! Sell with star keys (Each 5RS per key) and earn <span class="text-danger">5% guaranteed profit</span>!</p>
            </div>
            
            <!-- Action Buttons -->
            <div class="mt-4 d-flex justify-content-center gap-3">
                <button class="btn btn-success btn-lg px-4 shadow-sm" @click="buyCoins">
                    <i class="fas fa-coins"></i> Buy & Earn
                </button>
                <button class="btn btn-warning btn-lg px-4 shadow-sm" @click="sellKeys">
                    <i class="fas fa-key"></i> Sell Star Keys
                </button>
                <router-link to="/trade" class="btn btn-outline-primary btn-lg px-4 shadow-sm">
                    <i class="fas fa-chart-line"></i> Trade Now
                </router-link>
            </div>
            
            <!-- Why Choose 5Earn -->
            <div class="mt-5 text-start text-dark">
                <h3 class="fw-bold">Why Choose 5Earn?</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0"><i class="fas fa-robot text-info"></i> <span class="fw-semibold">AI-powered Investment</span></li>
                    <li class="list-group-item border-0"><i class="fas fa-hand-holding-usd text-success"></i> <span class="fw-semibold">Secure & Reliable</span></li>
                    <li class="list-group-item border-0"><i class="fas fa-chart-line text-warning"></i> <span class="fw-semibold">High Returns & Bonus Coins</span></li>
                </ul>
            </div>
        </div>
    `,
    data() {
        return {
            sideMenuOpen: false
        };
    },
    methods: {
        buyCoins() {
            alert("You bought 5ERN coins with a 10% bonus!");
        },
        sellKeys() {
            alert("You sold your star keys for 100ERN with a 5% guaranteed profit!");
        },
        closeSideMenu() {
            this.sideMenuOpen = false;
        }
    }
};
