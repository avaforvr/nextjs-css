const withSass = require('@zeit/next-sass');
const generateScopedName = require('./build/generateScopedName');

module.exports = withSass({
    // 开启css模块化
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        // scoped class 格式
        getLocalIdent: (context, localIdentName, localName) => {
            return generateScopedName(localName, context.resourcePath)
        }
    },
    webpack: (config) => {
        // 全局变量和mixin
        config.module.rules.push({
            enforce: 'pre',
            test: /.scss$/,
            loader: 'sass-resources-loader',
            options: {
                resources: ['./components/styles/variables.scss'],
            }
        });

        return config;
    }
});
