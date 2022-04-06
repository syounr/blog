import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
	@IsNotEmpty()
	@IsString()
	value!: string;

	@IsString()
	description?: string;
}
