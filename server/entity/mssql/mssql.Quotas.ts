import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('Quotas')
// eslint-disable-next-line import/prefer-default-export
export class Quotas {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column()
  Code?: number;

  @Column()
  SubQuota?: number;

  @Column()
  TitleId!: number;

  @Column()
  FirstNameTH?: string;

  @Column()
  LastNameTH?: string;

  @Column()
  FirstNameEN!: string;

  @Column()
  LastNameEN!: string;

  @Column()
  DateOfBirth!: Date;

  @Column({ type: 'bigint' })
  IDCard!: number;

  @Column({ type: 'bigint' })
  IDFarm!: number;

  @Column()
  Email!: string;

  @Column()
  LineId!: string;

  @Column()
  Phone!: string;

  @Column()
  Tel!: string;

  @Column()
  AssociationId!: number;

  @Column()
  RegAddressNo!: string;

  @Column()
  RegVillage!: string;

  @Column()
  RegMoo!: string;

  @Column()
  RegSoi!: string;

  @Column()
  RegRoad!: string;

  @Column()
  RegTambonCode!: number;

  @Column()
  RegTambonName!: string;

  @Column()
  RegAmphurCode!: number;

  @Column()
  RegAmphurName!: string;

  @Column()
  RegProvinceCode!: number;

  @Column()
  RegProvinceName!: string;

  @Column()
  RegAddressZipcode!: number;

  @Column()
  Status!: number;

  @Column()
  ApproveBy!: number;

  @Column()
  SurveyUserCode!: number;
}
