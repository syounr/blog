import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth-guard';
import { Roles } from '../auth/roles-decorator';
import { RolesGuard } from '../auth/roles-guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { DeleteRoleDto } from './dto/delete-role.dto';
import { RolesService } from './roles.service';

@Controller('/roles')
@Roles("Admin")
@UseGuards(AuthGuard, RolesGuard)
export class RolesController {
	constructor(private readonly rolesService: RolesService) {}

	@Post('create')
	create(@Body() params: CreateRoleDto) {
		return this.rolesService.create(params);
	}

	@Delete('delete')
	delete(@Body() { value }: DeleteRoleDto) {
		return this.rolesService.deleteByValue(value);
	}

	@Post('restore')
	restore(@Body() { value }: DeleteRoleDto) {
		return this.rolesService.restore(value);
	}

	@Post('get')
	get(@Body() { value }: DeleteRoleDto) {
		return this.rolesService.getByValue(value);
	}
}
