import { getUsername } from './utils/username.js';
import { setupInput } from './utils/input.js';
import { printCurrentDirectory, setHomeDirectory } from './utils/directory.js';

const username = getUsername(process.argv);

console.log(`Welcome to the File Manager, ${username}!`);

setHomeDirectory();
printCurrentDirectory();

setupInput(username);
