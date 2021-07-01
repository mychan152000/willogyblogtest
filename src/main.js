// Import main css
import '~/assets/style/index.scss'
import Vue from 'vue'
import Vssue from 'vssue';
import GithubV3 from '@vssue/api-github-v3';
import 'vssue/dist/vssue.css'


// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Then add it to export function



// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  Vue.use(Vssue, {
    api: GithubV3,
    owner: 'mychan152000',
    repo: 'willogyblogtest',
    clientId: '8df817f6fe85b570f293',
    clientSecret: '136ef75400102361a3e55bd32a8e3dc1004283a3',
  })
}