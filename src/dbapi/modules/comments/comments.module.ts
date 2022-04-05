import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '../../database/entities/comment.entity';
import { MailModule } from '../../../mail/mail.module';
import { LoggerModule } from '../logger/logger.module';
import { PostsModule } from '../posts/posts.module';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    PostsModule,
    LoggerModule,
    MailModule,
  ],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
