import { getUsername } from './utils/username.js';
import { setupInput } from './utils/input.js';
import { printCurrentDirectory, setHomeDirectory } from './utils/directory.js';

const username = getUsername(process.argv);

// Приветствие при запуске
console.log(`Welcome to the File Manager, ${username}!`);

// Устанавливаем рабочую директорию
setHomeDirectory();
printCurrentDirectory();

// Настраиваем ввод пользователя
setupInput(username);
