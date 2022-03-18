import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfigProvider } from './providers';

@Module({
  imports: [ConfigModule, typeORMConfigProvider],
})
export class DatabaseModule {}
