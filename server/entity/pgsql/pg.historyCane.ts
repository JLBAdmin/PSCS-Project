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
export class HistoryCane {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, comment: 'โควตา' })
  quota!: number;

  @Column({ nullable: true, comment: 'ปีการส่งเสริม' })
  cropYear?: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history1_ton_contract!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history1_ton_real!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    default: 0,
    comment: 'ประวัติ%',
    nullable: true
  })
  history1_ton_per!: number;

  @Column({
    default: '',
    comment: 'เกรดชาวไร่',
    nullable: true
  })
  history1_grad!: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history1_money!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    default: 0,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history1_cane_ton!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history1_canetype01!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history1_canetype02!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history1_canetype03!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history1_canetype04!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history1_canetype05!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history1_canetype06!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history2_ton_contract!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history2_ton_real!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    default: 0,
    comment: 'ประวัติ%',
    nullable: true
  })
  history2_ton_per!: number;

  @Column({
    default: '-',
    comment: 'เกรดชาวไร่',
    nullable: true
  })
  history2_grad!: string;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    default: 0,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history2_cane_ton!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history2_money!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history2_canetype01!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history2_canetype02!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history2_canetype03!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history2_canetype04!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history2_canetype05!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history2_canetype06!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history3_ton_contract!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history3_ton_real!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    default: 0,
    comment: 'ประวัติ%',
    nullable: true
  })
  history3_ton_per!: number;

  @Column({
    nullable: true,
    comment: 'เกรดชาวไร่',
    default: '-'
  })
  history3_grad!: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history3_money!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    default: 0,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history3_cane_ton!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history3_canetype01!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history3_canetype02!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history3_canetype03!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history3_canetype04!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history3_canetype05!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history3_canetype06!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history4_ton_contract!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history4_ton_real!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    default: 0,
    comment: 'ประวัติ%',
    nullable: true
  })
  history4_ton_per!: number;

  @Column({
    nullable: true,
    comment: 'เกรดชาวไร่',
    default: '-'
  })
  history4_grad!: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history4_money!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    default: 0,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history4_cane_ton!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history4_canetype01!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history4_canetype02!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history4_canetype03!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history4_canetype04!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history4_canetype05!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history4_canetype06!: number;

  @Column({ nullable: true, default: 9 })
  budget_grade?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
