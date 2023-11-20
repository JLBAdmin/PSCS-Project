import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class Projects {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  project_name?: string;

  @Column({ nullable: true })
  project_scss?: string;

  @Column({ nullable: true })
  project_price?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
