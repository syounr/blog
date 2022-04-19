import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from '../controllers/posts.controller';
import { PostsService } from '../modules/posts/posts.service';
import { PostsDTO } from '../dto/post.dto';

describe('PostsController', () => {
    let postsController: PostsController;
    let postsService: PostsService;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({

            controllers: [PostsController],
            providers: [PostsService],
        }).compile();
        postsService = moduleRef.get<PostsService>(PostsService);
        postsController = moduleRef.get<PostsController>(PostsController);
    });

    describe('findAll', () => {
        it('should return an array of posts', async () => {
            const result = [
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
            ];;
            const posts = await postsService.getPosts();

            expect(posts).toStrictEqual(result);

        });
    });

    describe('create post', () => {
        it('should create post', async () => {
            const result =
            {
                id: 3,
                name: 'test',
                description: 'test',
                text: 'test',
                createdAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
                updatedAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
                comments: [
                   
                ],
            };
            await postsService.createPost({
                id: 3,
                name: 'test',
                description: 'test',
                text: 'test',
                createdAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
                updatedAt: new Date(Date.parse('2022-04-19T18:11:10.386Z')),
                comments: [
                   
                ],
            })

            const post = await postsService.getPost(2);

            expect(post).toStrictEqual(result);

        });
    });

});