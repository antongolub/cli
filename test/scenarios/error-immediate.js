'use strict'
require('../..')(main)

function main () {
  console.log('started')
  return Promise.reject(new Error('boom'))
  console.log('finished')
}
