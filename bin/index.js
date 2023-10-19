#!/usr/bin/env node
const { exec } = require('child_process');
const { log } = require('console');
const args = process.argv.slice(2);

if (args.length > 1) {
  console.log("请输入正确文件名");
  return;
}

exec(`mkdir ${args[0]}`, (err, stdout, stderr) => {
  if (err) {
    log(err);
    return;
  }
})

exec(`yarn create vite docs --template react`, (err, stdout, stderr) => {
  if (err) {
    log(err);
    return;
  }
})