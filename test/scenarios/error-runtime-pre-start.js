'use strict'
require('../..')(main)

function main () {
  console.log('started')
  console.log('finished')
  return Promise.resolve()
}

main.test.example = 'will explode'
