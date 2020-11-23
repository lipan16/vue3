// 用作页面适配 将px转换为rem 使用大写PX时不做转换
module.exports = {
    "plugins": {
        "postcss-pxtorem": {
            rootValue: 37.5, // Vant 官方根字体大小是 37.5
            propList: ['*'],
            selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
        }
    }
}