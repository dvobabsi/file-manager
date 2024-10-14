import os from 'os';
import process from 'process';

export const setHomeDirectory = () => {
  const homeDirectory = os.homedir();
  process.chdir(homeDirectory);
};

export const printCurrentDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
};
