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
export class Canes {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, comment: 'ปีการผลิต' })
  cropYear?: string;

  @Column({ nullable: true, comment: 'เป้าหมายเข้าหีบ' })
  target?: string;

  @Column({ nullable: true, comment: 'Day1' })
  day1?: number;

  @Column({ nullable: true, comment: 'Day2' })
  day2!: number;

  @Column({ nullable: true, comment: 'Day3' })
  day3?: number;

  @Column({ nullable: true, comment: 'Day4' })
  day4?: number;

  @Column({ nullable: true, comment: 'Day5' })
  day5?: number;

  @Column({ nullable: true, comment: 'Day6' })
  day6?: number;

  @Column({ nullable: true, comment: 'Day7' })
  day7?: number;

  @Column({ nullable: true, comment: 'Day8' })
  day8?: number;

  @Column({ nullable: true, comment: 'Day9' })
  day9?: number;

  @Column({ nullable: true, comment: 'Day10' })
  day10?: number;

  @Column({ nullable: true, comment: 'Day11' })
  day11?: number;

  @Column({ nullable: true, comment: 'Day12' })
  day12?: number;

  @Column({ nullable: true, comment: 'Day13' })
  day13?: number;

  @Column({ nullable: true, comment: 'Day14' })
  day14?: number;

  @Column({ nullable: true, comment: 'Day15' })
  day15?: number;

  @Column({ nullable: true, comment: 'Day16' })
  day16?: number;

  @Column({ nullable: true, comment: 'Day17' })
  day17?: number;

  @Column({ nullable: true, comment: 'Day18' })
  day18?: number;

  @Column({ nullable: true, comment: 'Day19' })
  day19?: number;

  @Column({ nullable: true, comment: 'Day20' })
  day20?: number;

  @Column({ nullable: true, comment: 'Day21' })
  day21?: number;

  @Column({ nullable: true, comment: 'Day22' })
  day22?: number;

  @Column({ nullable: true, comment: 'Day23' })
  day23?: number;

  @Column({ nullable: true, comment: 'Day24' })
  day24?: number;

  @Column({ nullable: true, comment: 'Day25' })
  day25?: number;

  @Column({ nullable: true, comment: 'Day26' })
  day26?: number;

  @Column({ nullable: true, comment: 'Day27' })
  day27?: number;

  @Column({ nullable: true, comment: 'Day28' })
  day28?: number;

  @Column({ nullable: true, comment: 'Day29' })
  day29?: number;

  @Column({ nullable: true, comment: 'Day30' })
  day30?: number;

  @Column({ nullable: true, comment: 'Day31' })
  day31?: number;

  @Column({ nullable: true, comment: 'Day32' })
  day32?: number;

  @Column({ nullable: true, comment: 'Day343' })
  day33?: number;

  @Column({ nullable: true, comment: 'Day34' })
  day34?: number;

  @Column({ nullable: true, comment: 'Day35' })
  day35?: number;

  @Column({ nullable: true, comment: 'Day36' })
  day36?: number;

  @Column({ nullable: true, comment: 'Day37' })
  day37?: number;

  @Column({ nullable: true, comment: 'Day38' })
  day38?: number;

  @Column({ nullable: true, comment: 'Day39' })
  day39?: number;

  @Column({ nullable: true, comment: 'Day40' })
  day40?: number;

  @Column({ nullable: true, comment: 'Day41' })
  day41?: number;

  @Column({ nullable: true, comment: 'Day42' })
  day42?: number;

  @Column({ nullable: true, comment: 'Day43' })
  day43?: number;

  @Column({ nullable: true, comment: 'Day44' })
  day44?: number;

  @Column({ nullable: true, comment: 'Day45' })
  day45?: number;

  @Column({ nullable: true, comment: 'Day46' })
  day46?: number;

  @Column({ nullable: true, comment: 'Day47' })
  day47?: number;

  @Column({ nullable: true, comment: 'Day48' })
  day48?: number;

  @Column({ nullable: true, comment: 'Day49' })
  day49?: number;

  @Column({ nullable: true, comment: 'Day50' })
  day50?: number;

  @Column({ nullable: true, comment: 'Day51' })
  day51?: number;

  @Column({ nullable: true, comment: 'Day52' })
  day52?: number;

  @Column({ nullable: true, comment: 'Day53' })
  day53?: number;

  @Column({ nullable: true, comment: 'Day54' })
  day54?: number;

  @Column({ nullable: true, comment: 'Day55' })
  day55?: number;

  @Column({ nullable: true, comment: 'Day56' })
  day56?: number;

  @Column({ nullable: true, comment: 'Day57' })
  day57?: number;

  @Column({ nullable: true, comment: 'Day58' })
  day58?: number;

  @Column({ nullable: true, comment: 'Day59' })
  day59?: number;

  @Column({ nullable: true, comment: 'Day60' })
  day60?: number;

  @Column({ nullable: true, comment: 'Day61' })
  day61?: number;

  @Column({ nullable: true, comment: 'Day62' })
  day62?: number;

  @Column({ nullable: true, comment: 'Day63' })
  day63?: number;

  @Column({ nullable: true, comment: 'Day64' })
  day64?: number;

  @Column({ nullable: true, comment: 'Day65' })
  day65?: number;

  @Column({ nullable: true, comment: 'Day66' })
  day66?: number;

  @Column({ nullable: true, comment: 'Day67' })
  day67?: number;

  @Column({ nullable: true, comment: 'Day68' })
  day68?: number;

  @Column({ nullable: true, comment: 'Day69' })
  day69?: number;

  @Column({ nullable: true, comment: 'Day70' })
  day70?: number;

  @Column({ nullable: true, comment: 'Day71' })
  day71?: number;

  @Column({ nullable: true, comment: 'Day72' })
  day72?: number;

  @Column({ nullable: true, comment: 'Day73' })
  day73?: number;

  @Column({ nullable: true, comment: 'Day74' })
  day74?: number;

  @Column({ nullable: true, comment: 'Day75' })
  day75?: number;

  @Column({ nullable: true, comment: 'Day76' })
  day76?: number;

  @Column({ nullable: true, comment: 'Day77' })
  day77?: number;

  @Column({ nullable: true, comment: 'Day78' })
  day78?: number;

  @Column({ nullable: true, comment: 'Day79' })
  day79?: number;

  @Column({ nullable: true, comment: 'Day80' })
  day80?: number;

  @Column({ nullable: true, comment: 'Day81' })
  day81?: number;

  @Column({ nullable: true, comment: 'Day82' })
  day82?: number;

  @Column({ nullable: true, comment: 'Day83' })
  day83?: number;

  @Column({ nullable: true, comment: 'Day84' })
  day84?: number;

  @Column({ nullable: true, comment: 'Day85' })
  day85?: number;

  @Column({ nullable: true, comment: 'Day86' })
  day86?: number;

  @Column({ nullable: true, comment: 'Day87' })
  day87?: number;

  @Column({ nullable: true, comment: 'Day88' })
  day88?: number;

  @Column({ nullable: true, comment: 'Day89' })
  day89?: number;

  @Column({ nullable: true, comment: 'Day90' })
  day90?: number;

  @Column({ nullable: true, comment: 'Day91' })
  day91?: number;

  @Column({ nullable: true, comment: 'Day92' })
  day92?: number;

  @Column({ nullable: true, comment: 'Day93' })
  day93?: number;

  @Column({ nullable: true, comment: 'Day94' })
  day94?: number;

  @Column({ nullable: true, comment: 'Day95' })
  day95?: number;

  @Column({ nullable: true, comment: 'Day96' })
  day96?: number;

  @Column({ nullable: true, comment: 'Day97' })
  day97?: number;

  @Column({ nullable: true, comment: 'Day98' })
  day98?: number;

  @Column({ nullable: true, comment: 'Day99' })
  day99?: number;

  @Column({ nullable: true, comment: 'Day100' })
  day100?: number;

  @Column({ nullable: true, comment: 'Day101' })
  day101?: number;

  @Column({ nullable: true, comment: 'Day102' })
  day102?: number;

  @Column({ nullable: true, comment: 'Day103' })
  day103?: number;

  @Column({ nullable: true, comment: 'Day104' })
  day104?: number;

  @Column({ nullable: true, comment: 'Day105' })
  day105?: number;

  @Column({ nullable: true, comment: 'Day106' })
  day106?: number;

  @Column({ nullable: true, comment: 'Day107' })
  day107?: number;

  @Column({ nullable: true, comment: 'Day108' })
  day108?: number;

  @Column({ nullable: true, comment: 'Day109' })
  day109?: number;

  @Column({ nullable: true, comment: 'Day110' })
  day110?: number;

  @Column({ nullable: true, comment: 'Day111' })
  day111?: number;

  @Column({ nullable: true, comment: 'Day112' })
  day112?: number;

  @Column({ nullable: true, comment: 'Day113' })
  day113?: number;

  @Column({ nullable: true, comment: 'Day114' })
  day114?: number;

  @Column({ nullable: true, comment: 'Day115' })
  day115?: number;

  @Column({ nullable: true, comment: 'Day116' })
  day116?: number;

  @Column({ nullable: true, comment: 'Day117' })
  day117?: number;

  @Column({ nullable: true, comment: 'Day118' })
  day118?: number;

  @Column({ nullable: true, comment: 'Day119' })
  day119?: number;

  @Column({ nullable: true, comment: 'Day120' })
  day120?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
