module.exports =  {
    '/parts/api':{
        target: 'http://192.168.1.9:9004',
        changeOrigin: true,
        pathRewrite: {
          '/parts/api':'/api'
        }
      },
}