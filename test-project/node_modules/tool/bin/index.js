#!/usr/bin/env node
//Hashabang directive stating the interpreter we are using
import arg from 'arg'
import chalk from 'chalk'
import { getConfig } from '../src/config/config-mgr'
import { start } from '../src/commands/start'

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    })
    
    if(args['--start']){
       const config =getConfig();
       start(config);
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
       ${chalk.greenBright('--start')}\tStarts the app
       ${chalk.greenBright('--build')}\tBuilds the app
        `)
}