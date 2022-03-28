import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Posts } from './post.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ name: 'text', type: 'text' })
  text!: string;

  @ManyToOne(() => Posts)
  @JoinColumn()
  post!: Posts;

  @Column({ name: 'post_id', type: 'int' })
  postId!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
