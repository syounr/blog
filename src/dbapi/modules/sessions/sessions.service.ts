import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from '../../database/entities/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionsService {
	constructor(@InjectRepository(Session) private readonly sessionsRepository: Repository<Session>) {}

	getByToken(token: string) {
		return this.sessionsRepository.findOne({token: token});
	}

	createItem(item: Session) {
		return this.sessionsRepository.save(item);
	}
}
