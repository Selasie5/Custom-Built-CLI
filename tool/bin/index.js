#!/usr/bin/env node
//Hashabang directive stating the interpreter we are using
import arg from 'arg'
import chalk from 'chalk'

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    })
    
    if(args['--start']){
        console.log(chalk.bgCyanBright('Starting the application'))
    }
    console.log(process.argv)
} catch (error) {
    console.log(chalk.yellow(error.message));
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