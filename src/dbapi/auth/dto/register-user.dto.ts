import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class RegisterUserDto {

	@IsNotEmpty()
	@IsString()
	login!: string;

	@IsNotEmpty()
	@IsString()
	fullName!: string;

	@IsNotEmpty()
	@IsPhoneNumber()
	phone!: string;

	@IsNotEmpty()
	@IsString()
	password!: string;

}
