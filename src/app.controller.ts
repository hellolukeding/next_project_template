import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /**
   * @description param装饰器获取路由参数
   * @param id
   * @returns
   */
  @Get(':id')
  getTest(@Param('id') id: string): string {
    return `received: id=${id}`;
  }

  /**
   * @description 通过@Query()装饰器获取查询参数
   * @param name
   * @param age
   * @returns
   */
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }

  /**
   * @description: 通过@Body()装饰器获取请求体
   * @param createPersonDto
   * @returns
   */
  @Post('create')
  body(@Body() createPersonDto: any) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
  @Post('postfile')
  //visit https://medium.com/@427anuragsharma/upload-files-using-multipart-with-fastify-and-nestjs-3f74aafef331
  postfile() { }
}
