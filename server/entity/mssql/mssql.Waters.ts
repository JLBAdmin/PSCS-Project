import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('Waters')
// eslint-disable-next-line import/prefer-default-export
export class Waters {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column()
  QuotaId?: number;

  @Column()
  WaterName?: string;

  @Column()
  Location?: string;

  @Column()
  SeasonYear!: number;

  @Column()
  CreatedBy?: number;

  @Column()
  CreatedDate?: Date;

  @Column()
  ApprovedBy?: number;

  @Column()
  ApprovedDate?: Date;

  @Column()
  Status?: number;

  @Column()
  Depth?: number;

  @Column()
  Cubit?: number;

  @Column()
  SraWidth?: number;

  @Column()
  SraLong?: number;

  @Column()
  SraDepth?: number;

  @Column()
  ImageName?: string;

  @Column()
  ImageGps?: string;

  @Column()
  ForecastRai?: number;

  @Column()
  Comments?: string;

  @Column()
  PlanId?: number;

  @Column()
  StatusPlan?: string;
}
