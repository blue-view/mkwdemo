const path=require('path');
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
     
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    },
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        // path.resolve(__dirname,'./src/common/css/base.scss')
      ]
    }
  }
}
