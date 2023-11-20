import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export type UserRole = 'user' | 'admin';
export const userRoles = {
  USER: 'user' as UserRole,
  ADMIN: 'admin' as UserRole
};

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false
  })
  username!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false })
  email!: string;

  @Column('simple-enum', {
    default: userRoles.USER,
    enum: Object.values(userRoles)
  })
  roles!: UserRole;

  @Column({ type: 'smallint', default: 0 })
  tokenVersion!: number;

  @Column({ nullable: true })
  resetPasswordToken?: string;

  @Column({ type: 'smallint', nullable: true })
  resetPasswordTokenExpiry?: number;

  @Column({ nullable: true })
  facebookId?: string;

  @Column({ nullable: true })
  googleId?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
