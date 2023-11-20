import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('vw_FMCA0303')
// eslint-disable-next-line import/prefer-default-export
export class VwFMCA0303 {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column({ default: 0 })
  Price!: number;

  @Column({ default: 0 })
  SeasonYear?: number;

  @Column({ default: 0 })
  Cost?: number;

  @Column({ default: 0 })
  Amount?: number;

  @Column({ default: 0 })
  TotalPrice?: number;

  @Column({ default: 0 })
  TotalCost?: number;

  @Column({ default: 0 })
  Interest?: number;

  @Column({ default: 0 })
  ProductId?: number;

  @Column()
  ProductName?: string;

  @Column()
  ProductType?: string;

  @Column()
  ProductUnit?: string;

  @Column()
  Name?: string;

  @Column()
  QuotaName?: string;

  @Column({ default: 0 })
  QuotaCode?: number;

  @Column({ default: 0 })
  IDCard?: number;

  @Column({ default: 0 })
  OrderId?: number;

  @Column({ default: 0 })
  OrderCode?: number;

  @Column()
  OrderDate?: Date;

  @Column()
  DeliveryLocation?: string;

  @Column()
  DeliveryDate?: Date;

  @Column()
  BillingDate?: Date;

  @Column({ default: 0 })
  BillingNo?: number;

  @Column({ default: 0 })
  ZoneCode?: number;

  @Column()
  CaneSeasonGroupName?: string;

  @Column()
  QuotaAddress?: string;

  @Column()
  ZoneText?: string;

  @Column()
  Tel?: string;

  @Column({ default: 0 })
  Status?: number;
}
