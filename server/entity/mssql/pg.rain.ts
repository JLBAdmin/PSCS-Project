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
export class PsRains {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'smallint', default: 0 })
  zone!: number;

  @Column()
  district?: string;

  @Column()
  cumulativeRain?: string;

  @Column({ default: new Date() })
  today!: Date;

  @Column({ type: 'smallint', default: 0 })
  day1!: number;

  @Column({ type: 'smallint', default: 0 })
  day2!: number;

  @Column({ type: 'smallint', default: 0 })
  day3!: number;

  @Column({ type: 'smallint', default: 0 })
  day4!: number;

  @Column({ type: 'smallint', default: 0 })
  day5!: number;

  @Column({ type: 'smallint', default: 0 })
  day6!: number;

  @Column({ type: 'smallint', default: 0 })
  day7!: number;

  @Column({ type: 'smallint', default: 0 })
  day8!: number;

  @Column({ type: 'smallint', default: 0 })
  day9!: number;

  @Column({ type: 'smallint', default: 0 })
  day10!: number;

  @Column({ type: 'smallint', default: 0 })
  day11!: number;

  @Column({ type: 'smallint', default: 0 })
  day12!: number;

  @Column({ type: 'smallint', default: 0 })
  day13!: number;

  @Column({ type: 'smallint', default: 0 })
  day14!: number;

  @Column({ type: 'smallint', default: 0 })
  day15!: number;

  @Column({ type: 'smallint', default: 0 })
  day16!: number;

  @Column({ type: 'smallint', default: 0 })
  day17!: number;

  @Column({ type: 'smallint', default: 0 })
  day18!: number;

  @Column({ type: 'smallint', default: 0 })
  day19!: number;

  @Column({ type: 'smallint', default: 0 })
  day20!: number;

  @Column({ type: 'smallint', default: 0 })
  day21!: number;

  @Column({ type: 'smallint', default: 0 })
  day22!: number;

  @Column({ type: 'smallint', default: 0 })
  day23!: number;

  @Column({ type: 'smallint', default: 0 })
  day24!: number;

  @Column({ type: 'smallint', default: 0 })
  day25!: number;

  @Column({ type: 'smallint', default: 0 })
  day26!: number;

  @Column({ type: 'smallint', default: 0 })
  day27!: number;

  @Column({ type: 'smallint', default: 0 })
  day28!: number;

  @Column({ type: 'smallint', default: 0 })
  day29!: number;

  @Column({ type: 'smallint', default: 0 })
  day30!: number;

  @Column({ type: 'smallint', default: 0 })
  day31!: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
