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
export class Factorys {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, comment: 'ปีการผลิต' })
  cropYear?: string;

  @Column({ nullable: true, comment: 'ชื่อโรงงาน' })
  factory?: string;

  @Column({ nullable: true, comment: 'สถานะ' })
  factory_status?: string;

  @Column({ nullable: true, comment: 'วันเปิดหีบ' })
  factory_start?: string;

  @Column({ nullable: true, comment: 'วันปิดหีบ' })
  factory_stop?: string;

  @Column({ nullable: true, comment: 'กลู่มโรงงาน' })
  factory_group?: number;

  @Column({ nullable: true, comment: 'เป้าหีบอ้อย' })
  factory_target?: number;

  @Column({ nullable: true, comment: 'ประเมินอ้อย' })
  factory_rate?: number;

  @Column({ nullable: true, comment: 'เป้าหมายพื้นที่' })
  factory_area?: number;

  @Column({ nullable: true, comment: 'พื้นที่เสียหาย' })
  factory_bad?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day1'
  })
  day1?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS1'
  })
  ccs1?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day2'
  })
  day2?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS2'
  })
  ccs2?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day3'
  })
  day3?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS3'
  })
  ccs3?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day4'
  })
  day4?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS4'
  })
  ccs4?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day5'
  })
  day5?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS5'
  })
  ccs5?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day6'
  })
  day6?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS6'
  })
  ccs6?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day7'
  })
  day7?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS7'
  })
  ccs7?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day8'
  })
  day8?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS8'
  })
  ccs8?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day9'
  })
  day9?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS9'
  })
  ccs9?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day10'
  })
  day10?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS10'
  })
  ccs10?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day11'
  })
  day11?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS11'
  })
  ccs11?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day12'
  })
  day12?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS12'
  })
  ccs12?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day13'
  })
  day13?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS13'
  })
  ccs13?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day14'
  })
  day14?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS14'
  })
  ccs14?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day15'
  })
  day15?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS15'
  })
  ccs15?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day16'
  })
  day16?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS16'
  })
  ccs16?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day17'
  })
  day17?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS17'
  })
  ccs17?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day18'
  })
  day18?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS18'
  })
  ccs18?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day19'
  })
  day19?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS19'
  })
  ccs19?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day20'
  })
  day20?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS20'
  })
  ccs20?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day21'
  })
  day21?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS21'
  })
  ccs21?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day22'
  })
  day22?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS22'
  })
  ccs22?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day23'
  })
  day23?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS23'
  })
  ccs23?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day24'
  })
  day24?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS24'
  })
  ccs24?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day25'
  })
  day25?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS25'
  })
  ccs25?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day26'
  })
  day26?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS26'
  })
  ccs26?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day27'
  })
  day27?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS27'
  })
  ccs27?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day28'
  })
  day28?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS28'
  })
  ccs28?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day29'
  })
  day29?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS29'
  })
  ccs29?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day30'
  })
  day30?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS30'
  })
  ccs30?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day31'
  })
  day31?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS31'
  })
  ccs31?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day32'
  })
  day32?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS32'
  })
  ccs32?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day33'
  })
  day33?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS33'
  })
  ccs33?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day34'
  })
  day34?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS34'
  })
  ccs34?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day35'
  })
  day35?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS35'
  })
  ccs35?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day36'
  })
  day36?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS36'
  })
  ccs36?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day37'
  })
  day37?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS37'
  })
  ccs37?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day38'
  })
  day38?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS38'
  })
  ccs38?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day39'
  })
  day39?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS39'
  })
  ccs39?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day40'
  })
  day40?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS40'
  })
  ccs40?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day41'
  })
  day41?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS41'
  })
  ccs41?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day42'
  })
  day42?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS42'
  })
  ccs42?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day43'
  })
  day43?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS43'
  })
  ccs43?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day44'
  })
  day44?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS44'
  })
  ccs44?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day45'
  })
  day45?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS45'
  })
  ccs45?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day46'
  })
  day46?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS46'
  })
  ccs46?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day47'
  })
  day47?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS47'
  })
  ccs47?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day48'
  })
  day48?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS48'
  })
  ccs48?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day49'
  })
  day49?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS49'
  })
  ccs49?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day50'
  })
  day50?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS50'
  })
  ccs50?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day51'
  })
  day51?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS51'
  })
  ccs51?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day52'
  })
  day52?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS52'
  })
  ccs52?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day53'
  })
  day53?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS53'
  })
  ccs53?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day54'
  })
  day54?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS54'
  })
  ccs54?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day55'
  })
  day55?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS55'
  })
  ccs55?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day56'
  })
  day56?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS56'
  })
  ccs56?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day57'
  })
  day57?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS57'
  })
  ccs57?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day58'
  })
  day58?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS58'
  })
  ccs58?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day59'
  })
  day59?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS59'
  })
  ccs59?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day60'
  })
  day60?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS60'
  })
  ccs60?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day61'
  })
  day61?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS61'
  })
  ccs61?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day62'
  })
  day62?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS62'
  })
  ccs62?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day63'
  })
  day63?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS63'
  })
  ccs63?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day64'
  })
  day64?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS64'
  })
  ccs64?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day65'
  })
  day65?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS65'
  })
  ccs65?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day66'
  })
  day66?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS66'
  })
  ccs66?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day67'
  })
  day67?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS67'
  })
  ccs67?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day68'
  })
  day68?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS68'
  })
  ccs68?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day69'
  })
  day69?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS69'
  })
  ccs69?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day70'
  })
  day70?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS70'
  })
  ccs70?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day71'
  })
  day71?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS71'
  })
  ccs71?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day72'
  })
  day72?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS72'
  })
  ccs72?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day73'
  })
  day73?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS73'
  })
  ccs73?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day74'
  })
  day74?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS74'
  })
  ccs74?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day75'
  })
  day75?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS75'
  })
  ccs75?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day76'
  })
  day76?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS76'
  })
  ccs76?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day77'
  })
  day77?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS77'
  })
  ccs77?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day78'
  })
  day78?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS78'
  })
  ccs78?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day79'
  })
  day79?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS79'
  })
  ccs79?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day80'
  })
  day80?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS80'
  })
  ccs80?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day81'
  })
  day81?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS81'
  })
  ccs81?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day82'
  })
  day82?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS82'
  })
  ccs82?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day83'
  })
  day83?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS83'
  })
  ccs83?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day84'
  })
  day84?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS84'
  })
  ccs84?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day85'
  })
  day85?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS85'
  })
  ccs85?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day86'
  })
  day86?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS86'
  })
  ccs86?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day87'
  })
  day87?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS87'
  })
  ccs87?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day88'
  })
  day88?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS88'
  })
  ccs88?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day89'
  })
  day89?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS89'
  })
  ccs89?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day90'
  })
  day90?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS90'
  })
  ccs90?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day91'
  })
  day91?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS91'
  })
  ccs91?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day92'
  })
  day92?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS92'
  })
  ccs92?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day93'
  })
  day93?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS93'
  })
  ccs93?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day94'
  })
  day94?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS94'
  })
  ccs94?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day95'
  })
  day95?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS95'
  })
  ccs95?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day96'
  })
  day96?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS96'
  })
  ccs96?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day97'
  })
  day97?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS97'
  })
  ccs97?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day98'
  })
  day98?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS98'
  })
  ccs98?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day99'
  })
  day99?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS99'
  })
  ccs99?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day100'
  })
  day100?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS100'
  })
  ccs100?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day101'
  })
  day101?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS101'
  })
  ccs101?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day102'
  })
  day102?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS102'
  })
  ccs102?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day103'
  })
  day103?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS103'
  })
  ccs103?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day104'
  })
  day104?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS104'
  })
  ccs104?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day105'
  })
  day105?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS105'
  })
  ccs105?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day106'
  })
  day106?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS106'
  })
  ccs106?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day107'
  })
  day107?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS107'
  })
  ccs107?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day108'
  })
  day108?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS108'
  })
  ccs108?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day109'
  })
  day109?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS109'
  })
  ccs109?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day110'
  })
  day110?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS110'
  })
  ccs110?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day111'
  })
  day111?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS111'
  })
  ccs111?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day112'
  })
  day112?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS112'
  })
  ccs112?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day113'
  })
  day113?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS113'
  })
  ccs113?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day114'
  })
  day114?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS114'
  })
  ccs114?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day115'
  })
  day115?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS115'
  })
  ccs115?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day116'
  })
  day116?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS116'
  })
  ccs116?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day117'
  })
  day117?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS117'
  })
  ccs117?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day118'
  })
  day118?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS118'
  })
  ccs118?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day119'
  })
  day119?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS119'
  })
  ccs119?: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2,
    nullable: true,
    comment: 'Day120'
  })
  day120?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS120'
  })
  ccs120?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
