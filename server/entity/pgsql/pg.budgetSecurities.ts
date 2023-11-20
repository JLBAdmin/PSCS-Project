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
export class BudgetSecurities {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  securitiesId?: number;

  @Column({ nullable: true })
  budgetId?: number;

  @Column({ nullable: true })
  cropYear?: string;

  @Column({ nullable: true })
  quota?: number;

  @Column({ nullable: true })
  securitieType?: string;

  @Column({ nullable: true })
  quotaGuarantor?: number;

  @Column({ nullable: true, type: 'text' })
  securitieDetail?: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'มูลค่าหลักทรัพย์',
    nullable: true
  })
  securitieValue?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    comment: 'ราคาประเมินใหม่',
    nullable: true
  })
  appraisalPrice?: number;

  @Column({ nullable: true })
  ownership?: string;

  @Column({ nullable: true })
  ownershipName?: string;

  @Column({ nullable: true })
  ownerCardId?: string;

  @Column({ nullable: true })
  ownerAddress?: string;

  @Column({ nullable: true })
  ownershipName1?: string;

  @Column({ nullable: true })
  ownerCardId1?: string;

  @Column({ nullable: true })
  ownerAddress1?: string;

  @Column({ nullable: true })
  ownershipName2?: string;

  @Column({ nullable: true })
  ownerCardId2?: string;

  @Column({ nullable: true })
  ownerAddress2?: string;

  @Column({ nullable: true })
  ownershipName3?: string;

  @Column({ nullable: true })
  ownerCardId3?: string;

  @Column({ nullable: true })
  ownerAddress3?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
