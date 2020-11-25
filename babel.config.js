module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant'],
        ['component', {
            libraryName: 'element-plus',
            styleLibraryName: 'theme-chalk'
        }]
    ]
}
