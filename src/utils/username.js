import { argv } from 'process';

export const getUsername = (args) => {
  const usernameNpm = process.env.npm_config_username;
  if (usernameNpm) {
    return usernameNpm;
  }

  const usernameArg = args.find(arg => arg.startsWith('--username='));
  return usernameArg ? usernameArg.split('=')[1] : 'Anonymous';
};
