import { Injectable } from '@nestjs/common';
import { getConfig, getEnv } from './utils';

@Injectable()
export class AppService {

  getEnv(): string {
    return getEnv() as string
  }
  getConfig(): string {
    return getConfig();
  }
  
  getConfig() {
    return getConfig()
  }
}
