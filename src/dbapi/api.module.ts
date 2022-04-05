import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { PostsController } from './controllers/posts.controller';
import { DatabaseModule } from './database/database.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CommentsController } from './controllers/comments.controller';

@Module({
  imports: [DatabaseModule, PostsModule, CommentsModule],
  controllers: [PostsController, CommentsController],
})
export class ApiModule {}
