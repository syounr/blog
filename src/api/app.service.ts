import { Injectable } from '@nestjs/common';
import { Posts } from './dto/post.dto';

const posts: Posts[] = [
  {
    id: 1,
    name: 'fitst',
    description: 'first',
    text: 'first',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
];

@Injectable()
export class AppService {
  async getPosts(): Promise<Posts[]> {
    console.log(posts);
    return posts;
  }

  async getPost(id: number): Promise<Posts | undefined> {
    return posts[id - 1];
  }

  async createPost(data: Posts): Promise<Posts> {
    posts.push(data);
    return data;
  }

  async updatePost(data: Posts): Promise<Posts> {
    let existingPost = posts[data.id];
    existingPost = {
      ...existingPost,
      ...data,
    };
    posts[data.id] = existingPost;
    return posts[data.id];
  }

  async deletePost(id: number): Promise<Posts[]> {
    const post = posts[id];
    if (post) {
      posts.splice(id, id);
      return posts;
    } else throw new Error('Post not found');
  }
}
