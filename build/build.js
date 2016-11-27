// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var ghpages = require('gh-pages')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

function deploy () {
  spinner = ora('Start deploying')
  spinner.start()
  ghpages.publish(path.resolve(__dirname, '../dist'), {
    src: [
      '**/*'
    ]
  }, function (err) {
    spinner.stop()
    if (err) {
      console.log(err)
      console.log('Failed deploying')
      return
    }
    console.log('Finished deploying')
  })
}

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  deploy()
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
