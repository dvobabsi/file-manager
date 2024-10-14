import os from 'os';
import process from 'process';
import fs from 'fs/promises';
import path from 'path';
import { handleOperationFailed } from './errors.js';

export const setHomeDirectory = () => {
  const homeDirectory = os.homedir();
  process.chdir(homeDirectory);
};

export const printCurrentDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export const goUp = () => {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, '..');

  if (currentDir !== parentDir) {
    process.chdir(parentDir);
  }
};

export const changeDirectory = (targetPath) => {
  const newPath = path.resolve(process.cwd(), targetPath);

  fs.access(newPath)
    .then(() => process.chdir(newPath))
    .catch(() => console.error('Operation failed: Directory not found or no access'));
};

let remainingContent = [];


const displayContent = (content) => {
  const toShow = content.slice(0, 10);
  remainingContent = content.slice(10);

  console.table(toShow);

  if (remainingContent.length > 0) {
    console.log(`\nThere are ${remainingContent.length} more items. Type 'more' to see the rest.`);
  }
};

export const listDirectoryContent = async () => {
  try {
    const files = await fs.readdir(process.cwd(), { withFileTypes: true });

    const content = files
      .map((item) => ({
        Name: item.name,
        Type: item.isDirectory() ? 'directory' : 'file',
      }))
      .sort((a, b) => {
        if (a.Type === b.Type) return a.Name.localeCompare(b.Name);
        return a.Type === 'directory' ? -1 : 1;
      });

    displayContent(content);
  } catch (error) {
    handleOperationFailed(error);
  }
};

export const showMoreContent = () => {
  try {
    if (remainingContent.length === 0) {
      console.log('No more items to show.');
      return;
    }
    displayContent(remainingContent);
  } catch (error) {
    handleOperationFailed(error);
  }
};

