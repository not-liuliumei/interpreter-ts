import { Lox } from "./Lox"

const args = process.argv

if(args.length === 1) {
    new Lox(args[0]);
} else {
    console.log("Usage: tslox [script]");
}