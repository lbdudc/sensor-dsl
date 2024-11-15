#!/usr/bin/env node

import meow from "meow";
import fs from "fs";
import { parse } from "./index.js";
import path from "path";

const usage = "Usage: sensor-dsl input output";

const cli = meow(usage, {
  importMeta: import.meta,
  flags: {
    debug: {
      type: "boolean",
      default: false,
    },
  },
});

if (cli.input.length < 2) {
  cli.showHelp();
}

const inputPath = path.resolve(process.cwd(), cli.input.at(0));
const input = fs.readFileSync(inputPath, {
  encoding: "utf-8",
});

const spec = parse(input, cli.flags.debug);

const outputPath = path.resolve(process.cwd(), cli.input.at(1));
fs.writeFileSync(outputPath, JSON.stringify(spec, null, 2), "utf8");

console.log(`File ${cli.input.at(1)} generated`);
