import { IsDate, IsOptional, IsString } from 'class-validator';

export class CommentDTO {
  @IsString()
  text!: string;

  @IsOptional()
  @IsDate()
  createdAt!: Date;
}
