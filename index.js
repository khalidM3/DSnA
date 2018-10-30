require('babel-register')
require('./src')()

function main() {
  console.log("working ", process.argv);
}

main()
