import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('BudgetSeasons')
// eslint-disable-next-line import/prefer-default-export
export class BudgetSeasons {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column()
  QuotaId!: number;

  @Column()
  SeasonYear?: number;

  @Column()
  CaneSeasonGroupId?: number;

  @Column()
  ForecastRai?: number;

  @Column()
  ForecastTon?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  Request?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  Money?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  Credit?: number;

  @Column()
  LogRai?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  LogRequest?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  LogMoney?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  LogCredit?: number;

  @Column()
  UpdateRai?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  UpdateRequest?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  UpdateMoney?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false
  })
  UpdateCredit?: number;

  @Column()
  BudgetID?: number;

  @Column()
  Status?: number;

  @Column()
  CreatedBy?: number;

  @Column()
  CreatedDate?: Date;

  @Column()
  UpdatedBy?: number;

  @Column()
  UpdatedDate?: Date;

  @Column()
  CheckBy?: number;

  @Column()
  CheckDate?: Date;

  @Column()
  RecheckBy?: number;

  @Column()
  RecheckDate?: Date;

  @Column()
  ApprovedBy?: number;

  @Column()
  ApprovedDate?: Date;

  @Column()
  Comment?: string;
}
