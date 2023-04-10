import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 控制器负责处理传入的请求并将响应返回给客户端。
 */

@Controller('config')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("env")
  getEnv(): string {
    return this.appService.getEnv();
  }
  @Get("config")
  getConfig(): string {
    return this.appService.getConfig();
  }
}
