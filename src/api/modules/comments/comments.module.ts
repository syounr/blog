import { Module } from '@nestjs/common';
import { PostsController } from '../../controllers/posts.controller';
import { LoggerModule } from '../logger/logger.module';
import { PostsModule } from '../posts/posts.module';
import { CommentsService } from './comments.service';

@Module({
  imports: [PostsModule, LoggerModule],
  controllers: [PostsController],
  providers: [Array, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
