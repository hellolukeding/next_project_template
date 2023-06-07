import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * @description 这段代码是一个NestJS的Exception Filter，用于处理应用程序中发生的所有异常情况。@Catch(HttpException)装饰器指定了这个Filter要处理的异常类型，这里是HttpException。

异常过滤器实现了NestJS的ExceptionFilter接口，并实现了catch方法。当应用程序中抛出指定类型的异常时，NestJS将使用这个过滤器来对异常进行处理。

在catch方法中，我们首先从host参数中获取当前请求的上下文对象。然后我们使用switchToHttp()方法将上下文对象转换为一个HTTP上下文对象，这个HTTP上下文对象包含了请求和响应对象。

接下来，我们从HTTP上下文对象中获取响应对象和请求对象。我们还从异常对象中获取状态码，然后使用响应对象的status()方法将状态码设置为响应的状态码。

最后，我们将一个包含异常信息的响应体返回给客户端。这个响应体包含了状态码、时间戳、请求路径和异常信息。
 */
@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();

    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse(),
    });
  }
}
