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
export class HistoryDebt {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, comment: 'โควต้า' })
  quota!: number;

  @Column({ nullable: true, comment: 'ปีการส่งเสริม' })
  cropYear?: string;

  @Column({ nullable: false, comment: 'วันดึงหนี้' })
  dateDept!: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt1_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct1_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt1_overdue_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project1_debt_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project1_deduct_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project1_deduct_end_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct1_total!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct1_due_previous!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct1_due_last!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt2_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct2_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt2_overdue_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project2_debt_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project2_deduct_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project2_deduct_end_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct2_total!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct2_due_previous!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct2_due_last!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt3_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct3_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt3_overdue_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project3_debt_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project3_deduct_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project3_deduct_end_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct3_total!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct3_due_previous!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct3_due_last!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt4_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct4_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt4_overdue_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project4_debt_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project4_deduct_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project4_deduct_end_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct4_total!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct4_due_previous!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct4_due_last!: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
