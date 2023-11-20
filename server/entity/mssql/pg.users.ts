import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export enum RoleOptions {
  client = 'CLIENT',
  itemEditor = 'ITEMEDITOR',
  admin = 'ADMIN',
  superAdmin = 'SUPERADMIN'
}

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class PsUsers {
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

  // @Column({
  //   type: String,
  //   enum: RoleOptions,
  //   default: [RoleOptions.client]
  // })
  // roles!: RoleOptions[];

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
