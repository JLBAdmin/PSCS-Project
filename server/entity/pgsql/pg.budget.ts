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
export class Budgets {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, comment: 'ปีการผลิต' })
  cropYear?: string;

  @Column({ nullable: true, comment: 'เลขที่โครงการ' })
  projectDoc?: string;

  @Column({ nullable: true, comment: 'จำนวนขอโครงการ' })
  projectAmount?: string;

  @Column({ nullable: false, comment: 'โควต้า' })
  quota?: number;

  @Column({ nullable: true, comment: 'วันที่อนุมัติ' })
  apporv_date?: string;

  @Column({ default: '00', nullable: true, comment: 'สถานะงบ' })
  budget_status?: string;

  @Column({ default: '00', nullable: true, comment: 'อนุมัติงบ' })
  budget_prove?: string;

  @Column({ nullable: true, comment: 'วันที่ดึงหนี้' })
  debt_date?: string;

  @Column({ nullable: true, comment: 'เขตส่งเสริม' })
  zone?: string;

  @Column({ nullable: true, comment: 'นักส่งเสริม' })
  subZone?: string;

  @Column({ nullable: true, comment: 'รองอ้อย' })
  manager?: number;

  @Column({ comment: 'อ้อยในเขต', nullable: true })
  outside?: string;

  @Column({
    default: 0,
    comment: 'ครั้งที่ขอ',
    nullable: true
  })
  request_num?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  ton_contract?: number;

  @Column({ comment: 'สัญญาตันเพิ่ม', nullable: true })
  add_ton_contract?: number;

  @Column({ comment: 'รวมสัญญาตัน', nullable: true })
  total_ton_contract?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion0_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion0_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion0_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion0_factor_inputs?: number;

  @Column({ default: 0 })
  promotion0_factor_status?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion0_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion0_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion0_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion0_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion1_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion1_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion1_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion1_factor_inputs?: number;

  @Column({ default: '01' })
  promotion1_factor_status?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion1_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion1_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion1_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion1_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion2_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion2_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion2_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion2_factor_inputs?: number;

  @Column({ default: '01' })
  promotion2_factor_status?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion2_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion2_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion2_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion2_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion3_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion3_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion3_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion3_factor_inputs?: number;

  @Column({ default: '01' })
  promotion3_factor_status?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion3_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion3_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion3_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion3_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion4_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion4_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion4_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion4_factor_inputs?: number;

  @Column({ default: '01' })
  promotion4_factor_status?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion4_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion4_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion4_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion4_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion5_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion5_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion5_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion5_factor_inputs?: number;

  @Column({ default: '01' })
  promotion5_factor_status?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion5_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion5_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion5_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion5_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion6_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion6_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion6_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion6_factor_inputs?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion6_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion6_budget_approved?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion6_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion6_baht_ton?: number;

  @Column({
    comment: 'พื้นที่ไร่',
    nullable: true
  })
  promotion7_area_contract?: number;

  @Column({ comment: 'สัญญาตัน', nullable: true })
  promotion7_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'เงินส่งเสริม',
    nullable: true
  })
  promotion7_money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ปัจจัยการผลิต',
    nullable: true
  })
  promotion7_factor_inputs?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'งบประมาณรวม',
    nullable: true
  })
  promotion7_budget_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'อนุมัติไปแล้ว',
    nullable: true
  })
  promotion7_budget_approved?: number;

  @Column({
    comment: 'ประเภทโครงการ',
    nullable: true
  })
  promotion7_project_type?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ขอครั้งนี้',
    nullable: true
  })
  promotion7_budget_use?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'บาทต่อตัน',
    nullable: true
  })
  promotion7_baht_ton?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt1_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct1_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt1_overdue_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project1_debt_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project1_deduct_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project1_deduct_end_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct1_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct1_due_previous?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct1_due_last?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt2_crop_due!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct2_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt2_overdue_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project2_debt_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project2_deduct_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project2_deduct_end_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct2_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct2_due_previous?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct2_due_last?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt3_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct3_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt3_overdue_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project3_debt_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project3_deduct_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project3_deduct_end_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct3_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct3_due_previous?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct3_due_last?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ค้างเก่า-ค้างดิว',
    nullable: true
  })
  debt4_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหัก',
    nullable: true
  })
  deduct4_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'หนี้ค้างไม่ถึงดิวชำระ',
    nullable: true
  })
  debt4_overdue_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'โครงการค้างเก่า-ค้างดิว',
    nullable: true
  })
  project4_debt_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีก่อน',
    nullable: true
  })
  project4_deduct_crop_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ดิวหักปีล่าสุด',
    nullable: true
  })
  project4_deduct_end_due?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ทั้งหมด',
    nullable: true
  })
  deduct4_total?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนี้ก่อนหน้า',
    nullable: true
  })
  deduct4_due_previous?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'รวมหนักหนี้ล่าสุด',
    nullable: true
  })
  deduct4_due_last?: number;

  @Column({
    type: 'decimal',
    precision: 6,
    scale: 2,
    comment: 'เฉลี่ยบาทต่อตัน',
    nullable: true
  })
  avg_baht_area?: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history1_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history1_ton_real?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    comment: 'ประวัติ%',
    nullable: true
  })
  history1_ton_per?: number;

  @Column({
    default: '-',
    comment: 'เกรดชาวไร่',
    nullable: true
  })
  history1_grad?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history1_money?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history1_cane_ton?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history1_canetype01?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history1_canetype02?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history1_canetype03?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history1_canetype04?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history1_canetype05?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history1_canetype06?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history2_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history2_ton_real?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    comment: 'ประวัติ%',
    nullable: true
  })
  history2_ton_per?: number;

  @Column({
    default: '-',
    comment: 'เกรดชาวไร่',
    nullable: true
  })
  history2_grad?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history2_cane_ton?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history2_money?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history2_canetype01?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history2_canetype02?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history2_canetype03?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history2_canetype04?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history2_canetype05?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history2_canetype06?: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history3_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history3_ton_real?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    comment: 'ประวัติ%',
    nullable: true
  })
  history3_ton_per?: number;

  @Column({
    nullable: true,
    default: '-',
    comment: 'เกรดชาวไร่'
  })
  history3_grad?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history3_money?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history3_cane_ton?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history3_canetype01?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history3_canetype02?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history3_canetype03?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history3_canetype04?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history3_canetype05?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history3_canetype06?: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
    comment: 'ประวัติสัญญาตัน',
    nullable: true
  })
  history4_ton_contract?: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
    comment: 'ประวัติส่งจริง',
    nullable: true
  })
  history4_ton_real?: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 4,
    comment: 'ประวัติ%',
    nullable: true
  })
  history4_ton_per?: number;

  @Column({
    nullable: true,
    comment: 'เกรดชาวไร่',
    default: '-'
  })
  history4_grad?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติรับเงินส่งเสริม',
    nullable: true
  })
  history4_money?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติตันต่อไร่',
    nullable: true
  })
  history4_cane_ton?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ปลายฝน',
    nullable: true
  })
  history4_canetype01?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่รื้อตอ',
    nullable: true
  })
  history4_canetype02?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ต้นฝน',
    nullable: true
  })
  history4_canetype03?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ1',
    nullable: true
  })
  history4_canetype04?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ2',
    nullable: true
  })
  history4_canetype05?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    comment: 'ประวัติพื้นที่ตอ3',
    nullable: true
  })
  history4_canetype06?: number;

  @Column({ default: false })
  budget_pass?: boolean;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 2,
    default: 0,
    comment: 'มูลค่าหลักทรัพย์'
  })
  securitiesValue?: number;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 2,
    default: 0,
    comment: 'มูลค่าบุคคลค้ำ'
  })
  guarantorValue?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก1',
    nullable: true
  })
  Due1?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'สัญญา1',
    nullable: true
  })
  ContractYear1?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก2',
    nullable: true
  })
  Due2?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'สัญญา2',
    nullable: true
  })
  ContractYear2?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก3',
    nullable: true
  })
  Due3?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'สัญญา3',
    nullable: true
  })
  ContractYear3?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก4',
    nullable: true
  })
  Due4?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'สัญญา4',
    nullable: true
  })
  ContractYear4?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก5',
    nullable: true
  })
  Due5?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'สัญญา5',
    nullable: true
  })
  ContractYear5?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก6',
    nullable: true
  })
  Due6?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'สัญญา6',
    nullable: true
  })
  ContractYear6?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'ดิวหัก7',
    nullable: true
  })
  Due7?: number;

  @Column({ nullable: true, default: 9 })
  budget_grade?: number;

  @Column({ nullable: true, comment: 'ดิวงบล่าสุด' })
  DueNum?: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'พื้นที่ล่าสุด'
  })
  DueRai?: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 7,
    scale: 2,
    comment: 'สัญญาตาล่าสุด'
  })
  DueTon?: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    comment: 'สัญญาเพิ่มลด',
    nullable: true
  })
  increaseDecreaseContract?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    comment: 'ดอกเบี้ยโครงการ',
    nullable: true
  })
  ProjectInterest?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    comment: 'เงินต้นโครงการ',
    nullable: true
  })
  ProjectCapital?: number;

  @Column({
    type: 'date',
    nullable: true
  })
  ProjectInspectionDate?: Date;

  @Column({ nullable: false, comment: 'ผู้ปรับปรุง' })
  userUpdate?: string;

  @Column({ default: false })
  printStatus1?: boolean;

  @Column({ default: false })
  printStatus2?: boolean;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @DeleteDateColumn()
  deletedAt: Date | undefined;
}
