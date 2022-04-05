import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Posts } from '../database/entities/post.entity';
import { PostsDTO } from '../dto/post.dto';
import { PostsService } from '../modules/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.postsService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<Posts | undefined> {
    return this.postsService.getPost(query.id);
  }

  @Post('create')
  async createPost(@Body() data: PostsDTO): Promise<Posts> {
    return this.postsService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<Posts> {
    return this.postsService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(
    @Query() query: { id: number },
    @Body() data: PostsDTO,
  ): Promise<Posts> {
    return this.postsService.updatePost(query.id, data);
  }
}
