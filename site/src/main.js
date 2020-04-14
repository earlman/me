// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "gridsome-plugin-remark-container/themes/default.css";

// Import Design System
import '~/styles/index.sass'

// Import Fonts: https://github.com/KyleAMathews/typefaces
import 'typeface-merriweather'
import 'typeface-open-sans'

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
