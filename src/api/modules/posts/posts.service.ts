import { Injectable } from '@nestjs/common';
import { PostsDTO } from '../../dto/post.dto';

const posts:PostsDTO[] = [
  {
    id: 1,
    name: 'fitst',
    description: 'first',
    text: 'first',
    createdAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
    updatedAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
    comments: [
      {
        id: 1,
        text: 'comment',
        createdAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
      },
      {
        id: 2,
        text: 'second comment',
        createdAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
      },
    ],
  },
];

@Injectable()
export class PostsService {
  async getPosts(): Promise<PostsDTO[]> {
    return posts;
  }

  async getPost(id: number): Promise<PostsDTO | undefined> {
    return posts[id - 1];
  }

  async createPost(data: PostsDTO): Promise<PostsDTO> {
    posts.push(data);
    return data;
  }

  async updatePost(data: PostsDTO): Promise<PostsDTO> {
    let existingPost = posts[data.id];
    existingPost = {
      ...existingPost,
      ...data,
    };
    posts[data.id] = existingPost;
    return posts[data.id];
  }

  async deletePost(id: number): Promise<PostsDTO[]> {
    const post = posts[id];
    if (post) {
      posts.splice(id, id);
      return posts;
    } else throw new Error('Post not found');
  }
}
