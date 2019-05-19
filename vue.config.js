module.exports = {
    configureWebpack: config => {
        config.entry.app = './src/app.js'
    },
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    }
};
