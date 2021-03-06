/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://123456.qcloud.la';
//开发环境
//var host = 'https://qn578nhp.qcloud.la';
//本地开发环境配置
var host = 'http://localhost:5757';
//生产环境
//var host = 'https://593097808.xiagao.xyz';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,

        // 上传图片接口
        activeInfoUrl: `${host}/weapp/active`
    }
};

module.exports = config;
