export default {
    template: `
        <div>
            <h2>Sell Page</h2>
            <p>Sell your products here.</p>
            <button @click="showAlert">Click Me</button>
        </div>
    `,
    mounted() {
        this.sellMounted();
    },
    methods: {
        sellMounted() {
            alert(0);
        },
        showAlert() {
            alert("Button clicked!");
        }
    }
};
