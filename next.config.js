/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins')
const fs = require('fs')
const path = require('path')
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './style/index.less'), 'utf8')
)

const nextConfig = {}
const plugins = [
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]
  
        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      return config
    },
  }),
  withFonts
]
module.exports = withPlugins(plugins, nextConfig)

