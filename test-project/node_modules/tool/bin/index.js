#!/usr/bin/env node
//Hashabang directive stating the interpreter we are using
import arg from 'arg'
import chalk from 'chalk'
import path from "path"
import pkgUp, { pkgUpSync } from "pkg-up"

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    })
    
    if(args['--start']){
        // const pkg = require(path.join(process.cwd(),'package.json')) //If the user runs our tool from a subdirectory it will throw an error
        //REFACTOR
        const pkgPath= pkgUpSync({cwd:process.cwd()})
        const pkg = require(pkgPath);
        if(pkg.tool){
            console.log("Found configuration", pkg.tool)
        }
        else{
            console.log(chalk.yellowBright('Could not find configuration using default'))
        }
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
       ${chalk.greenBright('--start')}\tStarts the app
       ${chalk.greenBright('--build')}\tBuilds the app
        `)
}