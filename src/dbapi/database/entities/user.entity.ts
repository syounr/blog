import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	Index,
	UpdateDateColumn,
	CreateDateColumn,
	OneToMany,
	ManyToMany,
	JoinTable,
} from 'typeorm';
import { Session } from './session.entity';
import { Role } from './role.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Index()
	@Column({ nullable: true })
	login!: string;

	@Index()
	@Column({ name: 'full_name' })
	fullName!: string;

	@Column()
	password!: string;

	@CreateDateColumn({ type: 'timestamp', name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
	updatedAt!: Date;

	@OneToMany(() => Session, session => session.userId, { cascade: true })
	sessions!: Session[];

	@ManyToMany(() => Role)
	@JoinTable()
	roles!: Role[];
}
