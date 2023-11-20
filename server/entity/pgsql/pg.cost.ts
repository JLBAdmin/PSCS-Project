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
export class CostsDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  CropYear?: string;

  @Column({ nullable: true })
  MainAccount?: string;

  @Column({ nullable: true })
  NameAccount?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    nullable: true
  })
  TotalQTY?: number;

  @Column({
    type: 'decimal',
    precision: 6,
    scale: 2,
    default: 0,
    nullable: true
  })
  TotalAmount?: number;

  @Column({
    type: 'date',
    nullable: true
  })
  TranDate?: Date;

  @Column({ nullable: true })
  Remark?: string;

  @Column({ nullable: true })
  UserId?: string;

  @Column({ nullable: true })
  StatusAccount?: boolean;

  @Column({ nullable: true })
  CloseAccount?: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
