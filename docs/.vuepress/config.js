module.exports = {
    title: 'NP Collections',
    description: 'This documentation details metadata standards and conventions for all content published by New Perpsectives',
    dest: 'dist/docs',
    base: '/docs/',
    themeConfig: {
        repo: 'earlman/me',
        docsDir: 'docs',
        editLinks: true,
        // logo: '/assets/logo.png', //located in public folder
        sidebar: [
            '/',
            // 'overview',
            {
                title: 'Content',
                path: '/content/',
                collapsable: false,
            },
            // {
            //     title: 'Site',
            //     path: '/site/',
            //     collapsable: false,
            // },
            // {
            //     title: 'Server',
            //     path: '/server/',
            //     collapsable: false,
            // },
            // {
            //     title: 'Docs',
            //     path: '/docs/',
            //     collapsable: false,
            // },
        ],
        displayAllHeaders: true


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