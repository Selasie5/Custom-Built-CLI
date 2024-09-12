#!/usr/bin/env node
//Hashabang directive stating the interpreter we are using
const arg = require('arg');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    })
    
    if(args['--start']){
        console.log('Starting the application')
    }
    console.log(process.argv)
} catch (error) {
    console.log(error.message);
    console.log();
    usage()
}

function usage(){
    console.log(`
        tool[CMD]
        --start\tStarts the app
        --build\tBuilds the app
        `)
}