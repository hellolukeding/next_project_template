import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

/**
 * @descriptionNestJS Interceptor是一种用于拦截请求和处理响应的中间件。它们可以在请求处理前和响应发送后执行一些操作，例如记录请求日志、验证请求、转换响应等。

Interceptor的原理是通过实现NestJS的Interceptor接口来创建一个可重用的拦截器类。Interceptor接口定义了一个intercept方法，该方法接收两个参数：一个代表当前正在处理的请求的上下文对象和一个代表下一个处理程序的回调函数。在intercept方法中，我们可以执行一些操作，例如修改请求或响应对象，然后调用next.handle()方法来将控制权传递给下一个处理程序。

在NestJS应用程序中，我们可以通过将Interceptor类注册为提供程序来将其应用于路由处理程序或控制器中的特定动作或控制器。我们可以使用@UseInterceptors()装饰器将它们与处理程序或控制器相关联。
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 0,
          extra: {},
          message: 'success',
          success: true,
        };
      }),
    );
  }
}
