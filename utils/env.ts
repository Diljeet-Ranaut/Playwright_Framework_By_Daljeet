// utils/env.ts
import dotenv from 'dotenv';
dotenv.config();

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`❌ Environment variable ${name} is missing`);
  }
  return value;
}

export const ENV = {
  username: getEnvVar('USERNAME'),
  password: getEnvVar('PASSWORD'),
};
