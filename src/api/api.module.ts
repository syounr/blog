import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsController } from './controllers/posts.controller';
import { CommentsController } from './controllers/comments.controller';
import { MulterModule } from '@nestjs/platform-express';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [
    PostsModule,
    CommentsModule,
    // MulterModule.register({
    //   dest: './upload',
    // })
  ],
  controllers: [PostsController, CommentsController],
})
export class ApiModule {}
