import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SessionsService } from '../modules/sessions/sessions.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private readonly sessionsService: SessionsService,
	) {}
	async canActivate(ctx: ExecutionContext) {
		const request = ctx.switchToHttp().getRequest();
		const accessToken = request.headers['authorization'];

		if (!accessToken) {
			throw new UnauthorizedException();
		}
		const session = await this.sessionsService.getByToken(accessToken);
		if (!session) {
			throw new UnauthorizedException();
		}
		request.userId = session.userId;

		return request;
	}
}
