#!/usr/bin/env node
//Hashabang directive stating the interpreter we are using
const arg = require('arg')

const args = arg({
    '--start': Boolean,
    '--build': Boolean
})

if(args(['--start'])){
    console.log('Starting the application')
}
console.log(process.argv)