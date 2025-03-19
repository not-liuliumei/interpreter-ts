import * as fs from "fs";
import { Scanner } from "./Scanner";
import readline from "readline/promises";

export class Lox {
  private hadError = false;

  constructor(filePath: string) {
    this.runFile(filePath);
  }

  runFile(path: string) {
    const file = fs.readFileSync(path, "utf-8");
    this.run(file);

    if (this.hadError) {
      process.exit(65);
    }
  }

  run(file: string) {
    console.log(file);
    const scanner = new Scanner(file);
    const tokens = scanner.scanTokens();

    tokens.forEach((token) => {
      console.log(token);
    });
  }

  error(line: Number, message: string) {
    this.report(line, "", message);
  }

  report(line: Number, where: string, message: string) {
    console.log(`[line ${line}] Error ${where}: ${message}`);
    this.hadError = true;
  }
}
