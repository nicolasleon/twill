import Vue from 'vue'
import store from '@/store'

// General shared behaviors
import main from '@/main'
import search from '@/main-search'
import openMediaLibrary from '@/behaviors/openMediaLibrary'

// Plugins
import A17Config from '@/plugins/A17Config'
import A17Notif from '@/plugins/A17Notif'

// Dashboard
import a17ShortcutCreator from '@/components/dashboard/shortcutCreator.vue'
import A17ActivityFeed from '@/components/dashboard/activityFeed.vue'
import A17StatFeed from '@/components/dashboard/statFeed.vue'
import A17GenericFeed from '@/components/dashboard/genericFeed.vue'

// Store modules
import datatable from '@/store/modules/datatable'

// configuration
Vue.use(A17Config)
Vue.use(A17Notif)

store.registerModule('datatable', datatable)

/* eslint-disable no-new */
/* eslint no-unused-vars: "off" */
window.vm = new Vue({
  store, // inject store to all children
  el: '#app',
  components: {
    'a17-shortcut-creator': a17ShortcutCreator,
    'a17-activity-feed': A17ActivityFeed,
    'a17-stat-feed': A17StatFeed,
    'a17-feed': A17GenericFeed
  },
  created: function () {
    openMediaLibrary()
  }
})

// DOM Ready general actions
document.addEventListener('DOMContentLoaded', main)
