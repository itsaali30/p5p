export default {
  template: `
    <div>
      <h2 class="mb-4 text-center">My Tabs</h2>
      
      <!-- Nav Pills Centered -->
      <ul class="nav nav-pills justify-content-center mb-3" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link" :class="{ active: tab === 'one' }" @click="switchTab('one')" type="button">
            Tab One
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" :class="{ active: tab === 'two' }" @click="switchTab('two')" type="button">
            Tab Two
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <transition :name="slideDirection" mode="out-in">
        <div :key="tab" class="tab-content border p-3 rounded shadow-sm">
          <div v-if="tab === 'one'" class="tab-pane active">
            <h5>Tab One Content</h5>
            <p>This is the content for Tab One.</p>
          </div>
          <div v-else-if="tab === 'two'" class="tab-pane active">
            <h5>Tab Two Content</h5>
            <p>This is the content for Tab Two.</p>
          </div>
        </div>
      </transition>
    </div>
  `,
  data() {
    return {
      tab: 'one',
      slideDirection: 'slide-right'
    };
  },
  methods: {
    switchTab(newTab) {
      this.slideDirection = newTab === 'one' ? 'slide-right' : 'slide-left';
      this.tab = newTab;
    }
  }
};
