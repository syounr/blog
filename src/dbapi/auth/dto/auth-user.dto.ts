import { IsString, IsNotEmpty } from 'class-validator';

export class AuthUserDto {
	@IsNotEmpty()
	@IsString()
	login!: string;

	@IsNotEmpty()
	@IsString()
	password!: string;
}
