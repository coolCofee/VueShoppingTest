//vue 3.0脚手架配置文件
//必须以vue.config.js命名方式才能打包编译
module.exports = {
    configureWebpack:{
        resolve:{
            //设置别名
            alias:{
                'assets':'@/assets',
                'network':'@/network',
                'views':'@/views',
                'components':'@/components',
                'common':'@/common'
            }
        }
    }
}
