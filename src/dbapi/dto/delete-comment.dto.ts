import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class DeleteCommentDTO {

  @ApiProperty({description: 'Номер поста'})
  @IsInt()
  postId!: string;

  @ApiProperty({description: 'Номер комментария'})
  @IsInt()
  commentId!: Date;

}
