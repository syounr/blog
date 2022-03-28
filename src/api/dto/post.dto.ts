import { CommentDTO } from './comment.dto';
import { IsArray, IsDate, IsInt, IsPositive, IsString } from 'class-validator';

export class PostsDTO {
  @IsInt()
  @IsPositive()
  id!: number;

  @IsString()
  name!: string;

  @IsDate()
  createdAt!: Date;

  @IsDate()
  updatedAt!: Date;

  @IsString()
  description!: string;

  @IsString()
  text!: string;

  @IsArray()
  comments!: CommentDTO[];
}
