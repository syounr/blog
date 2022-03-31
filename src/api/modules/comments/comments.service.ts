import { Injectable } from '@nestjs/common';
import { CommentDTO } from '../../../api/dto/comment.dto';
import { PostsDTO } from '../../dto/post.dto';
import { PostsService } from '../posts/posts.service';
import * as fs from 'fs';
import { Response } from 'express';
import { MyLogger } from '../logger/logger.service';
import { MailService } from '../../../mail/mail.service';

@Injectable()
export class CommentsService {
  constructor(
    private readonly postsService: PostsService,
    private readonly mailService: MailService,
    private myLogger: MyLogger,
  ) {
    this.myLogger.setContext('CommentsService');
  }

  async getComments(postId: number): Promise<CommentDTO[]> {
    const posts = await this.postsService.getPosts();
    return posts[postId].comments;
  }

  async getComment(postId: number, commentId: number): Promise<CommentDTO> {
    const posts = await this.postsService.getPosts();
    return posts[postId].comments[commentId];
  }

  async createComment(postId: number, data: CommentDTO): Promise<CommentDTO> {
    await this.mailService.sendLogMessage('gbtestar@mail.ru');
    const posts = await this.postsService.getPosts();
    posts[postId].comments.push(data);
    return data;
  }

  async saveFile(path: string, data: Buffer) {
    fs.writeFile(path, data, (error) => {
      if (error) throw new Error(error.message);
    });
  }

  async getFile(response: Response) {
    const buffer = fs.createReadStream('/Users/user/blog/files/receipt.pdf');
    this.myLogger.warn('About to return cats!');
    buffer.pipe(response).on('close', () => {
      buffer.destroy();
    });
  }

  async deleteComment(postId: number, commentId: number): Promise<PostsDTO[]> {
    const posts = await this.postsService.getPosts();
    const post = posts[postId - 1];
    const comment = post.comments[commentId - 1];
    if (comment) {
      post.comments.splice(commentId - 1, commentId - 1);
      return posts;
    } else throw new Error('Comment not found');
  }
}
