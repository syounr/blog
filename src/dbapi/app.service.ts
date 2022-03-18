import { Injectable } from '@nestjs/common';
import { Posts } from './database/entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}

  async getPosts(): Promise<Posts[]> {
    const posts = this.postsRepository.find();
    return posts;
  }

  async getPost(id: number): Promise<Posts | undefined> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createPost(data: Posts): Promise<Posts> {
    return this.postsRepository.save(data);
  }

  async updatePost(data: Posts): Promise<Posts> {
    const existingPost = await this.postsRepository.findOne({
      where: {
        id: data.id,
      },
    });
    return this.postsRepository.save({
      ...existingPost,
      ...data,
    });
  }

  async deletePost(id: number): Promise<Posts> {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });
    if (post) return this.postsRepository.remove(post);
    else throw new Error('Post not found');
  }
}
