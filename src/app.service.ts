import { Injectable } from '@nestjs/common';
import { getConfig } from './utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getConfig() {
    return getConfig()
  }
}
