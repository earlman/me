module.exports = {
    title: 'NP Collections',
    description: 'This documentation details metadata standards and conventions for all content published by New Perpsectives',
    dest: 'dist/docs',
    base: '/docs/',
    themeConfig: {
        // logo: '/assets/logo.png', //located in public folder
        // sidebar: [
        //     ['/', 'Overview'],
        //     {
        //         title: 'Articles',
        //         path: '/articles',
        //         collapsable: false,
        //         children: [
        //             '/articles/metadata',
        //             '/articles/categories'
        //         ]
        //     }
        // ],
        // displayAllHeaders: true


    },
    plugins: [
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>',
        }],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@img': '../../img'
            }
        }
    }

}