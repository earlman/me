import MetaInfo from './MetaInfo'

const limitWidth = () => {
    return {
        template: `
            <div style="width: 900px; margin: auto;">
                <story />
            </div>
        `}
}

export default {
    title: 'MetaInfo',
    decorators: [limitWidth],
    excludeStories: /.*Data$/ // Don't add exports that end in "Data" to stories
}

export const metaData = {
    datetime: '2019-12-16T17:42',
    tags: ['art', 'news', 'politics', 'productivity']
}

export const Default = () => ({
    components: { MetaInfo },
    template: `<div><meta-info :datetime="datetime" :tags="tags"/><p>This is a sample note.</p></div>`,
    props: {
        datetime: {
            default: metaData.datetime
        },
        tags: {
            default: metaData.tags
        }
    },
})