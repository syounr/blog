import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from '../database/entities/role.entity';
import { User } from '../database/entities/user.entity';
import { SessionsModule } from '../modules/sessions/sessions.module';
import { UsersRoles } from '../database/entities/users-roles.entity';

@Module({
	imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Role, User, UsersRoles]), SessionsModule],
	controllers: [RolesController],
	providers: [RolesService],
	exports: [RolesService],
})
export class RolesModule {}
