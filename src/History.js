export default {
  template: `
    <div>
      <h2 class="mb-4">My Tabs</h2>
      
      <!-- Nav Pills -->
      <ul class="nav nav-pills mb-3" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link" :class="{ active: tab === 'one' }" @click="tab = 'one'" type="button">
            Tab One
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" :class="{ active: tab === 'two' }" @click="tab = 'two'" type="button">
            Tab Two
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content border p-3 rounded shadow-sm">
        <div v-if="tab === 'one'" class="tab-pane active">
          <h5>Tab One Content</h5>
          <p>This is the content for Tab One.</p>
        </div>
        <div v-else-if="tab === 'two'" class="tab-pane active">
          <h5>Tab Two Content</h5>
          <p>This is the content for Tab Two.</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      tab: 'one'
    };
  }
};
