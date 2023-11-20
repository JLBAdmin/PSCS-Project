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
export class HourCane {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  days?: string;

  @Column({ nullable: true })
  hourNum?: number;

  @Column({ nullable: true })
  hours?: string;

  @Column({ nullable: true })
  hourCar?: number;

  @Column({
    type: 'decimal',
    precision: 6,
    scale: 2,
    default: 0,
    nullable: true
  })
  hourTon?: number;

  @Column({ nullable: true })
  hourCarBurn?: number;

  @Column({
    type: 'decimal',
    precision: 6,
    scale: 2,
    default: 0,
    nullable: true
  })
  hourTonBurn?: number;

  @Column({ nullable: true })
  hourCarIn?: number;

  @Column({ nullable: true })
  hourCarOutside?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
