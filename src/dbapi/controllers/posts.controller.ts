import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth-guard';
import { Roles } from '../auth/roles-decorator';
import { RolesGuard } from '../auth/roles-guard';
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
  
  @Roles("User")
  @UseGuards(RolesGuard)
  @Post('create')
  async createPost(@Body() data: PostsDTO): Promise<Posts> {
    return this.postsService.createPost(data);
  }


  @Roles("Admin")
  @UseGuards(RolesGuard)
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
