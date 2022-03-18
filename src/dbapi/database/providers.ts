import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { getOrmConfig } from './database-ormconfig.constant';

config();

export const typeORMConfigProvider = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) =>
    getOrmConfig(configService, '127.0.0.1') as TypeOrmModuleOptions,
});
