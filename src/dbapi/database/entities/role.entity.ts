import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Role {
	@PrimaryGeneratedColumn()
	id!: number;

	@Index()
	@Column({ unique: true })
	value!: string;

	@Column()
	description!: string;

	@CreateDateColumn({ type: 'timestamp', name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
	updatedAt!: Date;

	@Column({ name: 'is_deleted', default: false })
	isDeleted!: boolean;

	@Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
	deletedAt?: Date;
}
