import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity('posts')
export class Posts {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ name: 'name', type: 'text' })
  name!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @Column({ name: 'description', type: 'text' })
  description!: string;

  @Column({ name: 'text', type: 'text' })
  text!: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments!: Comment[];
}
