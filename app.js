const mongoose = require('mongoose')


main().catch(err => {console.log(err)})

async function main() {
    await mongoose.connect('mongo:db//locahost:27017/test')
}