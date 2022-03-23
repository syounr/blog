import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
import { DecrementId } from '../../utils/decrement-id.decorator';
import { Comment } from '../dto/comment.dto';
  import { Posts } from '../dto/post.dto';
import { CommentsService } from '../modules/comments/comments.service';
  
  @Controller('comments')
  export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
  
    @Get('/')
    async getComments(@Query() @DecrementId(['id']) query: { id: number }): Promise<Comment[]> {
      return this.commentsService.getComments(query.id);
    }
  
    @Get('/get-one')
    async getComment(@Query() @DecrementId(['postId', 'commentId']) query: { postId: number, commentId: number }): Promise<Comment | undefined> {
      return this.commentsService.getComment(query.postId, query.commentId);
    }
  
    @Post('create')
    async createComment(@Query() @DecrementId(['id']) query: { id: number }, @Body() data: Comment): Promise<Comment> {
      return this.commentsService.createComment(query.id, data);
    }
  
    @Delete('delete')
    async deleteComment(@Body() body: { postId: number, commentId: number }): Promise<Posts[]> {
      return this.commentsService.deleteComment(body.postId, body.commentId);
    }
  
  }
  