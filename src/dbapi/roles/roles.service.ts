import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateRoleDto } from './dto/create-role.dto';
import { Repository } from 'typeorm';
import { Role } from '../database/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
	constructor(@InjectRepository(Role) private readonly rolesRepository: Repository<Role>,) { }

	async create(params: CreateRoleDto) {
		const { value, description } = params;
		const isValue = await this.rolesRepository.findOne({ value: value });
		if (isValue) {
			throw new HttpException('The role with this value is already exist', HttpStatus.CONFLICT);
		}
		const result = await this.rolesRepository.save({ value: value, description: description });
		return plainToClass(CreateRoleDto, result);
	}

	async deleteByValue(value: string) {
		const role = await this.rolesRepository.findOne(value);
		if (!role) {
			throw new HttpException('Role does not exist', HttpStatus.NOT_FOUND);
		}
		await this.rolesRepository.softDelete(role);
	}

	async restore(value: string) {
		const role = await this.rolesRepository.findOne({
			where: {
				value,
				isDeleted: true,
			},
		});
		if (!role) {
			throw new HttpException('Role does not exist', HttpStatus.NOT_FOUND);
		}
		return this.rolesRepository.save({ ...role, isDeleted: false });
	}

	async getByValue(value: string) {
		const role = await this.rolesRepository.findOne(value);
		if (!role) {
			throw new HttpException('Role does not exist', HttpStatus.NOT_FOUND);
		}
		return role;
	}
}
