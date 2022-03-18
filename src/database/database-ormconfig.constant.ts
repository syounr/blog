import { ConfigService } from '@nestjs/config';

export const getOrmConfig = (
  configService: ConfigService,
  hostname: string,
) => {
  let OrmConfig;
  const settings = {
    type: configService.get<string>('TYPEORM_CONNECTION'),
    host: hostname,
    port: configService.get<string>('TYPEORM_PORT'),
    username: configService.get<string>('TYPEORM_USERNAME'),
    password: configService.get<string>('TYPEORM_PASSWORD'),
    database: configService.get<string>('TYPEORM_DATABASE'),
    entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  };

  if (process.env.NODE_ENV !== 'test') {
    OrmConfig = {
      ...settings,
      migrations: [__dirname + '/../../../migration/*.ts'],
      migrationsDir: configService.get<string>('TYPEORM_MIGRATIONS_DIR'),
      logging: configService.get<string>('TYPEORM_LOGGING') === 'true',
      supportBigNumbers: true,
      bigNumberStrings: false,
      charset: 'utf8mb4',
    };
  } else {
    OrmConfig = {
      ...settings,
      synchronize: true,
      dropSchema: true,
    };
  }
  console.log(OrmConfig);
  return OrmConfig;
};
