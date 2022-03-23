import { Module } from '@nestjs/common';
import { PostsController } from '../../controllers/posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [Array, PostsService],
  exports: [PostsService],
})
export class PostsModule {}
