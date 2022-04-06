import { IsString } from 'class-validator';

export class TokenDto {
	@IsString()
	accessToken!: string;
}
