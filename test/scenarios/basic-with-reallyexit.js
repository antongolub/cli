'use strict'
require('../..')(main)

function main () {
  console.log('started')
  return new Promise((resolve, reject) => {
    process.reallyExit()
    console.log('finished')
    resolve()
  })
}
