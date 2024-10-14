import readline from 'readline';
import { printCurrentDirectory } from './directory.js';

export const setupInput = (username) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    if (input.trim() === '.exit') {
      rl.close();
    } else {
      console.log('Invalid input');
      printCurrentDirectory();
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  });

  process.on('SIGINT', () => {
    rl.close();
  });
};
