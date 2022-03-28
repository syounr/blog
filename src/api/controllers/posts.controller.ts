import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostsService } from '../modules/posts/posts.service';
import { PostsDTO } from '../dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<PostsDTO[]> {
    return this.appService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<PostsDTO | undefined> {
    return this.appService.getPost(query.id);
  }

  @Post('create')
  async createPost(@Body() data: PostsDTO): Promise<PostsDTO> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<PostsDTO[]> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(@Body() data: PostsDTO): Promise<PostsDTO> {
    return this.appService.updatePost(data);
  }
}
