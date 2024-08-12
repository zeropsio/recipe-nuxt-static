export default ({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon'],
    target: 'static',
    content: {
        highlight: {
            theme: 'nord',
            preload: ['js', 'css', 'html', 'md', 'ts', 'tsx', 'vue', 'python', 'ruby', 'java'],
        }
    }
})
