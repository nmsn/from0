#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

// ...  略

program
  .command("dev")
  .description("框架开发命令")
  .action(function () {
    
    const { dev } = require("../lib/dev.js");
    // console.log(module, module.dev);
    dev();
  });

program.parse(process.argv);
