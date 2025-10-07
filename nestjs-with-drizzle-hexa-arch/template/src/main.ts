import './lib/tracer';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docs = new DocumentBuilder()
    .setTitle('${{values.app_name}}')
    .setDescription('${{values.app_description}}')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, docs);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
