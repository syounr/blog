import { Injectable } from '@nestjs/common';
import { Comment } from '../../../api/dto/comment.dto';
import { Posts } from '../../dto/post.dto';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class CommentsService {

  constructor(
    private readonly postsService: PostsService,
  ) {}

  async getComments(postId: number): Promise<Comment[]> {
    const posts = await this.postsService.getPosts();
    return posts[postId].comments;
  }

  async getComment(postId: number, commentId: number): Promise<Comment> {
    const posts = await this.postsService.getPosts();
    return posts[postId].comments[commentId];
  }

  async createComment(postId: number, data: Comment): Promise<Comment> {
    const posts = await this.postsService.getPosts();
    posts[postId].comments.push(data);
    return data;
  }

  async deleteComment(postId: number, commentId: number): Promise<Posts[]> {
    const posts = await this.postsService.getPosts();
    const post = posts[postId - 1];
    const comment = post.comments[commentId - 1 ]
    if (comment) {
      post.comments.splice(commentId - 1, commentId - 1);
      return posts;
    } else throw new Error('Comment not found');
  }
}
