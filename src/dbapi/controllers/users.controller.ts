// import { Body, Controller, Request, Delete, Get, UseGuards, Post, HttpStatus } from '@nestjs/common';
// import {
// 	ApiTags,
// 	ApiOperation,
// 	ApiResponse,
// 	ApiBearerAuth,
// 	ApiNotFoundResponse,
// 	ApiExcludeEndpoint,
// } from '@nestjs/swagger';
// import { AuthGuard } from '../auth/auth-guard';
// import { DeleteUserDto } from '../dto/delete-user.dto';
// import { plainToClass } from 'class-transformer';
// import { UserInfoDto } from '../dto/user-info.dto';
// import { GetUserDto } from '../dto/get-user.dto';
// import { CreateUserDto } from '../dto/create-user.dto';
// import { RolesGuard } from '../auth/roles-guard';
// import { Roles } from '../auth/roles-decorator';
// import { Users } from '../database/entities/users.entity';
// import { AssignRoleDto } from '../dto/assign-role.dto';

// @ApiTags('Пользователи')
// @Controller('/users')
// @ApiBearerAuth()
// @Roles('Admin')
// @UseGuards(AuthGuard,RolesGuard)
// export class UserController {
// 	constructor(private readonly usersService: UsersService) {}

// 	@ApiOperation({
// 		summary: 'Создать пользователя',
// 	})
// 	@ApiResponse({ status: 200, type: Users })
// 	@Post('create')
// 	createUser(@Body() user: CreateUserDto) {
// 		return plainToClass(GetUserDto, this.usersService.createUser(user));
// 	}

// 	@ApiExcludeEndpoint()
// 	@ApiOperation({
// 		summary: 'Удалить пользователя',
// 	})
// 	@ApiResponse({ status: 200 })
// 	@ApiNotFoundResponse({ description: 'User does not exist' })
// 	@Delete('delete')
// 	deleteUser(@Body() { email }: DeleteUserDto) {
// 		return this.usersService.deleteUserByEmail(email);
// 	}

// 	@ApiExcludeEndpoint()
// 	@ApiOperation({
// 		summary: 'Привязать роль к пользователю',
// 	})
// 	@ApiResponse({ status: HttpStatus.OK, type: Users })
// 	@Post('assign')
// 	assign(@Body() params: AssignRoleDto) {
// 		return this.usersService.assign(params);
// 	}

// 	@ApiOperation({
// 		summary: 'Информация о портфеле пользователя',
// 	})
// 	@ApiResponse({ status: 200, type: UserInfoDto })
// 	@ApiNotFoundResponse({ description: 'User does not exist' })
// 	@Get('info')
// 	getUserInfo(@Request() { userId }) {
// 		return plainToClass(UserInfoDto, this.usersService.getUserInfo(userId));
// 	}

// 	@ApiOperation({
// 		summary: 'Данные пользователя',
// 	})
// 	@ApiResponse({ status: 200, type: UserInfoDto })
// 	@Get('account-info')
// 	getUser(@Request() { userId }) {
// 		return plainToClass(UserInfoDto, this.usersService.getUser(userId));
// 	}

// 	@ApiOperation({
// 		summary: 'Восстановить удаленного пользователя',
// 	})
// 	@ApiResponse({ status: 200, type: GetUserDto })
// 	@Post('restore')
// 	restoreUser(@Body() { email }: DeleteUserDto) {
// 		return plainToClass(GetUserDto, this.usersService.restoreUser(email));
// 	}
// }
