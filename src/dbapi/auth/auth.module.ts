import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Session } from '../database/entities/session.entity';
import { User } from '../database/entities/user.entity';
import { Role } from '../database/entities/role.entity';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forFeature([Session, User, Role]),
	],
	controllers: [AuthController],
	providers: [AuthService],
	exports: [AuthService]
})
export class AuthModule {}
