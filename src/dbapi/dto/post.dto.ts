import { CommentDTO } from './comment.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class PostsDTO {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  text!: string;

  @IsArray()
  @IsOptional()
  comments!: CommentDTO[];
}
