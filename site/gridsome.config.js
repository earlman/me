// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')
const moment = require('moment')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/04 - Layout/_media.sass'),
                path.resolve(__dirname, './src/styles/03 - Spacing/_helpers.sass'),
                path.resolve(__dirname, './src/styles/animations.sass'),
            ],
        })
}

function dateToPath(isoString) {
    const date = moment(isoString)
    const year = date.format('YYYY')
    const month = date.format('MM')
    const day = date.format('DD')
    const hour = date.format('HH')
    return year + '/' + month + '/' + day + '/' + hour

}


module.exports = {
    siteName: 'earlman.me',
    templates: {
        Article: [
            {
                path: (node) => {
                    return `/act/` + dateToPath(node['date-created'])
                }
            }
        ],
        Note: [
            {
                path: (node) => {
                    return `/act/` + dateToPath(node['date-created'])
                }
            }
        ],
        Movie: [
            {
                component: './src/templates/Exp.vue',
                path: (node) => {
                    return `/exp/` + dateToPath(node['date-completed'])
                }
            }
        ],
        // Show: [
        //     {
        //         component: './src/templates/Exp.vue',
        //         path: (node) => {
        //             return `/exp/` + dateToPath(node['date-completed'])
        //         }
        //     }
        // ],
        Book: [
            {
                component: './src/templates/Exp.vue',
                path: (node) => {
                    return `/exp/` + dateToPath(node['date-completed'])
                }
            }
        ],


    },
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '../content/pagecontent/*.md',
                typeName: 'PageContent',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '../content/articles/*.md',
                typeName: 'Article',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '../content/notes/*.md',
                typeName: 'Note',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '../content/experience/books/*.md',
                typeName: 'Book',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '../content/experience/movies/*.md',
                typeName: 'Movie',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: '../content/experience/shows/*.md',
                typeName: 'Show',
            }
        },

    ],
    transformers: {
        remark: {

        }
    },
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('sass').oneOf(type))
        })

    },
}
