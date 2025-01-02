import * as fs from 'fs';
import { Scanner } from './Scanner';

export class Lox {
    constructor(filePath: string) {
        this.runFile(filePath);
    }

    runFile(path: string) {
        const file = fs.readFileSync(path, 'utf-8');
        this.run(file);
    }

    run(file: string) {
        console.log(file);
        const scanner = new Scanner(file);
        const tokens = scanner.scan();

        tokens.forEach(token => {
            console.log(token);
        })        
    }
}

