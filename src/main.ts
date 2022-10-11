import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(4000);
}
bootstrap();
