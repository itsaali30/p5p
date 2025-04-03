export default {
    template: `
        <div class="bottom-nav d-flex justify-content-around py-2 bg-dark text-white">
            <router-link to="/" class="nav-item">
                <i class="fas fa-home"></i><br>Home
            </router-link>
            <router-link to="/wallet" class="nav-item">
                <i class="fas fa-wallet"></i><br>Wallet
            </router-link>
            <router-link to="/buy" class="nav-item">
                <i class="fas fa-shopping-cart"></i><br>Buy
            </router-link>
            <router-link to="/sell" class="nav-item">
                <i class="fas fa-handshake"></i><br>Sell
            </router-link>
            <router-link to="/history" class="nav-item">
                <i class="fas fa-history"></i><br>History
            </router-link>
        </div>
    `,
};
