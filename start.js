// start.js
require('babel-register')({
  'presets': [
    'stage-3',
    ["latest-node", { "target": "current" }]
  ]
})

require('babel-polyfill')
require('./server')

