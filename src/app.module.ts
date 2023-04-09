import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
@Module({
  imports: [
    //使用自定义yaml配置
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
    })],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
