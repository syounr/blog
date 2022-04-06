import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteRoleDto {
	@IsNotEmpty()
	@IsString()
	value!: string;
}
