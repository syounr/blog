import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import cors from 'cors';
import * as fs from 'fs';
import { join } from 'path';
import { ApiModule } from './api.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApiModule, {
    bufferLogs: true,
  });

  const configService = app.get(ConfigService);

  app.useStaticAssets(join(__dirname, '../..', 'static'));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      validationError: {
        target: false,
      },
    }),
  );

		const config = new DocumentBuilder()
			.addServer('/')
			.setTitle('GB API')
			.setDescription('GB API description')
			.setVersion('1.0')
			.addBearerAuth({ in: 'header', type: 'http' })
			.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('doc', app, document);
		fs.writeFileSync('./test.api.json', JSON.stringify(document));
	app.use(cors());

  app.setBaseViewsDir(join(__dirname, '../..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
