import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 控制器负责处理传入的请求并将响应返回给客户端。
 */

@Controller('any')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
