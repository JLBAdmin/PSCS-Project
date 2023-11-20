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
export class Companys {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, comment: 'ปีการผลิต' })
  cropYear?: string;

  @Column({ nullable: false, comment: 'รหัสบริษัท' })
  companyCode?: string;

  @Column({ nullable: false, comment: 'ชื่อบริษัท' })
  companyName?: string;

  @Column({ default: 0, nullable: false, comment: 'กำลังการหีบ' })
  Capacity?: number;

  @Column({ default: 0, nullable: false, comment: 'เป้าหมายหีบ' })
  Targets?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
