import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsController } from './controllers/posts.controller';
import { CommentsController } from './controllers/comments.controller';

@Module({
  imports: [
    PostsModule,
    CommentsModule
  ],
  controllers: [
    PostsController,
    CommentsController
  ],
})
export class ApiModule {}
