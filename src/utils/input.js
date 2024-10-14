import readline from 'readline';
import { printCurrentDirectory, goUp, changeDirectory, listDirectoryContent, showMoreContent } from './directory.js';
import { handleInvalidInput } from './errors.js';

export const setupInput = (username) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    const [command, ...args] = input.trim().split(' ');

    try {
      switch (command) {
        case 'up':
          goUp();
          break;

        case 'cd':
          if (!args.length) throw new Error('Path is missing');
          changeDirectory(args.join(' '));
          break;

        case 'ls':
          listDirectoryContent();
          break;

        case 'more':
          showMoreContent();
          break;

        case '.exit':
          rl.close();
          break;

        default:
          handleInvalidInput();
      }
    } catch (error) {
      handleInvalidInput();
    }

    printCurrentDirectory();
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  });

  process.on('SIGINT', () => {
    rl.close();
  });
};
