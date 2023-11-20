import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('ContractTons')
// eslint-disable-next-line import/prefer-default-export
export class ContractTons {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column({ default: 0 })
  QuotaId!: number;

  @Column({ default: 0 })
  SeasonYear?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  TotalTon?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  TotalRai?: number;

  @Column()
  Comment?: string;

  @Column()
  CreatedBy?: number;

  @Column()
  CreatedDate?: Date;
}
