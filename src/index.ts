import { Lox } from "./Lox";

const args = process.argv;
console.log(args);

if (args.length === 3) {
  new Lox(args[2]);
} else {
  console.log("Usage: tslox [script]");
}
