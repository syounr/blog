import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { PostsController } from './controllers/posts.controller';
import { DatabaseModule } from './database/database.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CommentsController } from './controllers/comments.controller';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { AuthController } from './auth/auth.controller';
import { RolesController } from './roles/roles.controller';
import { SessionsModule } from './modules/sessions/sessions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database/entities/user.entity';
import { UsersRoles } from './database/entities/users-roles.entity';
import { Role } from './database/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UsersRoles, Role]),
    DatabaseModule,
    PostsModule,
    CommentsModule,
    AuthModule,
    RolesModule,
    SessionsModule
  ],
  controllers: [PostsController, CommentsController, AuthController, RolesController],
})
export class ApiModule {}
