import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

// @Index(["id"])
@Entity()
// eslint-disable-next-line import/prefer-default-export
export class CropYears {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, comment: 'ปีการส่งเสริม' })
  cropYear?: string;

  @Column({ nullable: false, comment: 'ปีการผลิต' })
  cropCurrent?: string;

  @Column({ default: 0, nullable: false, comment: 'สถานะใช้งาน' })
  cropStatus?: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
