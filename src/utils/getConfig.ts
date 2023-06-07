import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'yaml';

export const getEnv = () => {
  return process.env.NODE_ENV || 'dev';
};

export const IS_DEV = getEnv() === 'dev';

export const getConfig = () => {
  const env = getEnv();
  console.log('The running environment is: ', env);
  const yamlPath = path.join(process.cwd(), `./.config/${env}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf8');
  const config = parse(file);
  return config;
};
