import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserDto {
	@IsNotEmpty()
	@IsNumber()
	id!: number;

	@IsNotEmpty()
	@IsString()
	email!: string;

	@IsNotEmpty()
	@IsString()
	fullName!: string;

	@Exclude()
	@IsNotEmpty()
	@IsString()
	password!: string;

	@IsNotEmpty()
	@IsString()
	phone!: string;

	@IsNotEmpty()
	@IsDate()
	createdAt!: Date;

	@IsNotEmpty()
	@IsDate()
	updatedAt!: Date;
}
