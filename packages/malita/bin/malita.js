#!/usr/bin/env node

const {
  Command
} = require('commander');

const program = new Command();

// ...  略

program.command('dev').description('框架开发命令').action(function() {
  require('../lib/dev')
});

program.parse(process.argv);