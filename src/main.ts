import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix('api') it is optional
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  await app.listen(4000);
}
bootstrap();
