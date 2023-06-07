import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/exceptions/base.exceptions.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptors';
import { IS_DEV, getConfig } from './utils/getConfig';

export const config = getConfig();
export const PORT = config.PORT || 8080;
export const PREFIX = config.PREFIX || '/';
export const bootstrap = async () => {
  console.log(`The Api will run on Port: ${PORT},IS_DEV: ${IS_DEV}`);
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      // 开启日志级别打印
      logger: IS_DEV ? ['log', 'debug', 'error', 'warn'] : ['error', 'warn'],
    },
  );
  //允许跨域请求
  app.enableCors();

  //全局使用拦截器，统一返回格式
  app.useGlobalInterceptors(new TransformInterceptor());

  // 全局使用过滤器，统一异常处理
  app.useGlobalFilters(new AllExceptionsFilter());

  // 启动版本管理
  app.enableVersioning({
    defaultVersion: '1', // 不指定默认版本为v1
    type: VersioningType.URI,
  });

  // 给请求添加prefix
  app.setGlobalPrefix(PREFIX);
  await app.listen(PORT, () => {
    logger.log(
      `服务已经启动,接口请访问:http://wwww.localhost:${PORT}/${PREFIX}`,
    );
  });
};
