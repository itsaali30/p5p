export default {
    template: `
        <div class="text-center">
            <h2 class="mb-3">Sell Your Products</h2>
            <p>Earn more by selling your products on 5Earn.</p>
            <button class="btn btn-primary" @click="sellNow">
                <i class="fas fa-store"></i> Start Selling
            </button>
        </div>
    `,
    methods: {
        sellNow() {
            alert("Get started with selling!");
        }
    }
};
