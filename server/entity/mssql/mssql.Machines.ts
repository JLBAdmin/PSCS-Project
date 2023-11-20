import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('QuotaMachines')
// eslint-disable-next-line import/prefer-default-export
export class QuotaMachines {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column({ default: 0 })
  QuotaId!: number;

  @Column({ default: 0 })
  Year?: number;

  @Column({ default: 0 })
  AmountMachine1?: number;

  @Column({ default: 0 })
  AmountMachine2?: number;

  @Column({ default: 0 })
  AmountMachine3?: number;

  @Column({ default: 0 })
  AmountMachine4?: number;

  @Column({ default: 0 })
  AmountMachine5?: number;

  @Column({ default: 0 })
  AmountMachine6?: number;

  @Column({ default: 0 })
  AmountMachine7?: number;

  @Column({ default: 0 })
  AmountMachine8?: number;

  @Column({ default: 0 })
  AmountMachine9?: number;

  @Column({ default: 0 })
  AmountMachine10?: number;

  @Column({ default: 0 })
  AmountMachine11?: number;

  @Column({ default: 0 })
  AmountMachine12?: number;

  @Column({ default: 0 })
  AmountMachine13?: number;

  @Column({ default: 0 })
  AmountMachine14?: number;

  @Column({ default: 0 })
  AmountMachine15?: number;

  @Column({ default: 0 })
  AmountMachine16?: number;

  @Column({ default: 0 })
  AmountMachine17?: number;

  @Column({ default: 0 })
  AmountMachine18?: number;

  @Column({ default: 0 })
  AmountMachine19?: number;

  @Column({ default: 0 })
  AmountMachine20?: number;

  @Column({ default: 0 })
  AmountMachine21?: number;

  @Column({ default: 0 })
  AmountMachine22?: number;

  @Column({ default: 0 })
  AmountMachine23?: number;

  @Column()
  AmountMachine24?: number;

  @Column()
  AmountMachine25?: number;

  @Column()
  AmountMachine26?: number;

  @Column()
  AmountMachine27?: number;

  @Column()
  AmountMachine28?: number;

  @Column()
  AmountMachine29?: number;

  @Column()
  AmountMachine30?: number;

  @Column()
  AmountMachine31?: number;

  @Column()
  AmountMachine32?: number;

  @Column()
  AmountMachine33?: number;

  @Column()
  AmountMachine34?: number;

  @Column()
  AmountMachine35?: number;

  @Column()
  AmountMachine36?: number;

  @Column()
  AmountMachine37?: number;

  @Column()
  AmountMachine38?: number;

  @Column()
  AmountMachine39?: number;

  @Column()
  AmountMachine40?: number;

  @Column()
  AmountMachine41?: number;

  @Column()
  AmountMachine42?: number;

  @Column()
  AmountMachine43?: number;

  @Column()
  SurveyUserCode?: number;

  @Column()
  prefix?: string;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;
}
