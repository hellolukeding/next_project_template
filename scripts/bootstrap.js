/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
const args = require('minimist')(process.argv.slice(2))
process.env.NODE_ENV = args.env || 'dev'
console.log('%c%s', 'color: #00a3cc', 'NODE_ENV: ' + process.env.NODE_ENV)