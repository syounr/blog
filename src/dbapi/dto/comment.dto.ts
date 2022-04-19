import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class CommentDTO {

  @ApiProperty()
  @IsString()
  text!: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  createdAt!: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  autor!: string;
}
