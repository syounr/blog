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

  @Column({ type: 'int' })
  postId!: number;

  @Column({ type: 'text', nullable: true })
  autor!: string;

  @ManyToOne(() => Posts)
  @JoinColumn()
  post!: Posts;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
