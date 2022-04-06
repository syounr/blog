import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('/auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	login(@Body() params: AuthUserDto) {
		return this.authService.login(params);
	}

	@Post('register')
	register(@Body() params: RegisterUserDto) {
		return this.authService.register(params);
	}
}
